import styles from './AnswerBox.module.css'

const CODE_LINE_RE = /^\s*(SELECT|FROM|WHERE|JOIN|GROUP BY|ORDER BY|HAVING|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|WITH|UNION|EXCEPT|INTERSECT|CALCULATE|SUMX|DIVIDE|FILTER|ALL|RELATED|RANKX|COUNTROWS|IF|SWITCH|VAR|RETURN|MEASURE|--|\/\/|#)/i

function classifyLines(text) {
  const lines = text.split('\n')
  const result = []
  let codeBlock = []

  function flushCode() {
    if (codeBlock.length > 0) {
      result.push({ type: 'code', lines: codeBlock })
      codeBlock = []
    }
  }

  for (const line of lines) {
    if (CODE_LINE_RE.test(line)) {
      codeBlock.push(line)
    } else {
      flushCode()
      result.push({ type: 'text', content: line })
    }
  }
  flushCode()
  return result
}

export default function AnswerBox({ text }) {
  const segments = classifyLines(text)

  return (
    <div className={styles.answer}>
      {segments.map((seg, i) =>
        seg.type === 'code' ? (
          <pre key={i} className={styles.code}>
            <code>{seg.lines.join('\n')}</code>
          </pre>
        ) : (
          <p key={i} className={styles.text}>{seg.content}</p>
        )
      )}
    </div>
  )
}
