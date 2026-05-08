import styles from './ScorePanel.module.css'

export default function ScorePanel({ stats }) {
  const { total, pass = 0, partial = 0, fail = 0, unseen = 0 } = stats
  const done = pass + partial + fail
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className={styles.panel}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.rows}>
        <span className={styles.stat}><span className={styles.dot} style={{ background: 'var(--pass)' }} />{pass} correctas</span>
        <span className={styles.stat}><span className={styles.dot} style={{ background: 'var(--partial)' }} />{partial} parciales</span>
        <span className={styles.stat}><span className={styles.dot} style={{ background: 'var(--fail)' }} />{fail} falladas</span>
        <span className={styles.stat}><span className={styles.dot} style={{ background: 'var(--text-muted)' }} />{unseen} no vistas</span>
      </div>
      <p className={styles.pct}>{pct}% completado</p>
    </div>
  )
}
