import styles from './TopicFilter.module.css'

const TOPIC_NAMES = [
  'Almacenamiento y Arquitecturas',
  'Procesamiento Distribuido',
  'Calidad del Dato',
  'Observabilidad y DataOps',
  'Visualización y BI',
]

export default function TopicFilter({ topics, value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value === 'all' ? 'all' : Number(e.target.value))}
      >
        <option value="all">Todos los temas</option>
        {topics.map(t => (
          <option key={t} value={t}>{TOPIC_NAMES[t] || `Tema ${t + 1}`}</option>
        ))}
      </select>
    </div>
  )
}
