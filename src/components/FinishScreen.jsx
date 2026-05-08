import styles from './FinishScreen.module.css'

export default function FinishScreen({ stats, failedCount, onRepeatFailed, onRepeatRound, onReset, onHome }) {
  const total = stats.pass + stats.partial + stats.fail
  const score = total > 0 ? Math.round(((stats.pass + stats.partial * 0.5) / total) * 100) : 0

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <h2 className={styles.title}>Ronda completada</h2>
        <p className={styles.score}>{score}% de dominio</p>
        <div className={styles.pills}>
          <span className={styles.pill} style={{ background: 'var(--pass)' }}>{stats.pass} correctas</span>
          <span className={styles.pill} style={{ background: 'var(--partial)' }}>{stats.partial} parciales</span>
          <span className={styles.pill} style={{ background: 'var(--fail)' }}>{stats.fail} falladas</span>
        </div>
        <div className={styles.actions}>
          {failedCount > 0 && (
            <button className={styles.btn} onClick={onRepeatFailed}>
              Repetir solo falladas ({failedCount})
            </button>
          )}
          <button className={`${styles.btn} ${styles.secondary}`} onClick={onRepeatRound}>
            Repetir esta ronda
          </button>
          <button className={`${styles.btn} ${styles.secondary}`} onClick={onHome}>
            Volver al inicio
          </button>
          <button className={styles.resetBtn} onClick={onReset}>
            Resetear todo el progreso
          </button>
        </div>
      </div>
    </div>
  )
}
