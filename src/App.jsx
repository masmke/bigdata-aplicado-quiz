import { useState, useMemo } from 'react'
import { QUESTIONS as questions, TOPICS as TOPIC_LIST } from './data/questions'
import { useProgress } from './hooks/useProgress'
import QuizCard from './components/QuizCard'
import ScorePanel from './components/ScorePanel'
import FinishScreen from './components/FinishScreen'
import TopicFilter from './components/TopicFilter'
import styles from './App.module.css'

const TOPICS = TOPIC_LIST.map((_, i) => i)

function buildQueue(mode, topicFilter, progress) {
  let pool = questions
    .map((q, i) => ({ ...q, index: i }))
    .filter(q => topicFilter === 'all' || q.t === topicFilter)

  if (mode === 'failed') {
    pool = pool.filter(q => progress[q.index] === 'fail' || !progress[q.index])
  }
  if (mode === 'random') {
    pool = [...pool].sort(() => Math.random() - 0.5)
  }
  return pool.map(q => q.index)
}

export default function App() {
  const { progress, setResult, resetAll, loaded } = useProgress()
  const [mode, setMode] = useState('sequential')
  const [topicFilter, setTopicFilter] = useState('all')
  const [queue, setQueue] = useState(null)
  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState('question')
  const [showHint, setShowHint] = useState(false)
  const [finished, setFinished] = useState(false)

  const topicLabels = useMemo(() => {
    const map = {}
    questions.forEach(q => { map[q.t] = map[q.t] || q.topic || `Tema ${q.t + 1}` })
    return map
  }, [])

  function start(m = mode, tf = topicFilter, prog = progress) {
    const q = buildQueue(m, tf, prog)
    setQueue(q)
    setCursor(0)
    setPhase('question')
    setShowHint(false)
    setFinished(false)
  }

  function handleRate(result) {
    if (!queue) return
    setResult(queue[cursor], result)
    const next = cursor + 1
    if (next >= queue.length) {
      setFinished(true)
    } else {
      setCursor(next)
      setPhase('question')
      setShowHint(false)
    }
  }

  function handlePrev() {
    if (cursor > 0) {
      setCursor(c => c - 1)
      setPhase('question')
      setShowHint(false)
    }
  }

  function handleNext() {
    if (queue && cursor < queue.length - 1) {
      setCursor(c => c + 1)
      setPhase('question')
      setShowHint(false)
    }
  }

  function handleRepeatFailed() {
    start('failed', topicFilter, progress)
  }

  function handleRepeatRound() {
    start(mode, topicFilter, progress)
  }

  function handleReset() {
    resetAll()
    setQueue(null)
    setFinished(false)
    setCursor(0)
    setPhase('question')
  }

  if (!loaded) return <div className={styles.loading}>Cargando...</div>

  if (!queue) {
    const stats = {
      total: questions.filter(q => topicFilter === 'all' || q.t === topicFilter).length,
      pass: 0, partial: 0, fail: 0, unseen: 0,
    }
    questions.forEach((q, i) => {
      if (topicFilter !== 'all' && q.t !== topicFilter) return
      const r = progress[i]
      if (!r) stats.unseen++
      else stats[r] = (stats[r] || 0) + 1
    })

    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <h1 className={styles.title}>BigData Aplicado Quiz</h1>
          <p className={styles.subtitle}>Repaso de examen · {questions.length} preguntas</p>
        </div>
        <ScorePanel stats={stats} />
        <TopicFilter
          topics={TOPICS}
          topicLabels={topicLabels}
          value={topicFilter}
          onChange={v => setTopicFilter(v)}
        />
        <div className={styles.modes}>
          {['sequential', 'random', 'failed'].map(m => (
            <button
              key={m}
              className={`${styles.modeBtn} ${mode === m ? styles.active : ''}`}
              onClick={() => setMode(m)}
            >
              {m === 'sequential' ? 'Secuencial' : m === 'random' ? 'Aleatorio' : 'Solo falladas'}
            </button>
          ))}
        </div>
        <button className={styles.startBtn} onClick={() => start()}>
          Empezar repaso
        </button>
        {Object.keys(progress).length > 0 && (
          <button className={styles.resetLink} onClick={handleReset}>
            Resetear progreso
          </button>
        )}
      </div>
    )
  }

  if (finished) {
    const failedIndices = queue.filter(i => progress[i] === 'fail' || !progress[i])
    const stats = {
      pass: queue.filter(i => progress[i] === 'pass').length,
      partial: queue.filter(i => progress[i] === 'partial').length,
      fail: queue.filter(i => progress[i] === 'fail').length,
    }
    return (
      <FinishScreen
        stats={stats}
        failedCount={failedIndices.length}
        onRepeatFailed={handleRepeatFailed}
        onRepeatRound={handleRepeatRound}
        onReset={handleReset}
        onHome={() => setQueue(null)}
      />
    )
  }

  const currentIndex = queue[cursor]
  const currentQ = questions[currentIndex]

  return (
    <div className={styles.quiz}>
      <QuizCard
        question={currentQ}
        index={currentIndex}
        position={cursor + 1}
        total={queue.length}
        phase={phase}
        showHint={showHint}
        result={progress[currentIndex]}
        onReveal={() => setPhase('answer')}
        onHint={() => setShowHint(true)}
        onRate={handleRate}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={cursor > 0}
        hasNext={cursor < queue.length - 1}
      />
    </div>
  )
}
