import { useEffect } from 'react'
import AnswerBox from './AnswerBox'
import styles from './QuizCard.module.css'

const TOPIC_NAMES = [
  'Almacenamiento y Arquitecturas',
  'Procesamiento Distribuido',
  'Calidad del Dato',
  'Observabilidad y DataOps',
  'Visualización y BI',
]

export default function QuizCard({
  question, index, position, total,
  phase, showHint, result,
  onReveal, onHint, onRate,
  onPrev, onNext, hasPrev, hasNext,
}) {
  useEffect(() => {
    function handleKey(e) {
      if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (phase === 'question') onReveal()
      } else if (e.key === 'h' || e.key === 'H') {
        if (phase === 'question' && question.hint) onHint()
      } else if (e.key === '1') {
        if (phase === 'answer') onRate('pass')
      } else if (e.key === '2') {
        if (phase === 'answer') onRate('partial')
      } else if (e.key === '3') {
        if (phase === 'answer') onRate('fail')
      } else if (e.key === 'ArrowLeft') {
        if (hasPrev) onPrev()
      } else if (e.key === 'ArrowRight') {
        if (hasNext) onNext()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [phase, question, hasPrev, hasNext, onReveal, onHint, onRate, onPrev, onNext])

  const topicName = TOPIC_NAMES[question.t] || `Tema ${question.t + 1}`
  const pct = Math.round((position / total) * 100)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.topic}>{topicName}</span>
        <span className={styles.counter}>{position} / {total}</span>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>

      <div className={styles.question}>
        <p>{question.q}</p>
      </div>

      {phase === 'question' && (
        <div className={styles.actions}>
          {question.hint && !showHint && (
            <button className={styles.hintBtn} onClick={onHint}>
              Pista (H)
            </button>
          )}
          {showHint && (
            <div className={styles.hint}>
              <span className={styles.hintLabel}>Pista:</span> {question.hint}
            </div>
          )}
          <button className={styles.revealBtn} onClick={onReveal}>
            Ver respuesta (Espacio)
          </button>
        </div>
      )}

      {phase === 'answer' && (
        <div className={styles.answerSection}>
          <div className={styles.answerBox}>
            <AnswerBox text={question.a} />
          </div>
          <div className={styles.rateButtons}>
            <button className={`${styles.rateBtn} ${styles.pass}`} onClick={() => onRate('pass')}>
              Correcto (1)
            </button>
            <button className={`${styles.rateBtn} ${styles.partial}`} onClick={() => onRate('partial')}>
              Parcial (2)
            </button>
            <button className={`${styles.rateBtn} ${styles.fail}`} onClick={() => onRate('fail')}>
              Fallé (3)
            </button>
          </div>
        </div>
      )}

      <div className={styles.nav}>
        <button className={styles.navBtn} onClick={onPrev} disabled={!hasPrev}>← Anterior</button>
        {result && (
          <span className={styles.resultBadge} data-result={result}>
            {result === 'pass' ? 'Correcto' : result === 'partial' ? 'Parcial' : 'Fallé'}
          </span>
        )}
        <button className={styles.navBtn} onClick={onNext} disabled={!hasNext}>Siguiente →</button>
      </div>
    </div>
  )
}
