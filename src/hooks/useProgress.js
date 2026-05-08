import { useState, useEffect } from 'react'

const STORAGE_KEY = 'bigdata-aplicado-progress'

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveToLocalStorage(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {}
}

export function useProgress() {
  const [progress, setProgress] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const isElectron = typeof window !== 'undefined' && window.electronAPI
    if (isElectron) {
      window.electronAPI.getProgress().then(data => {
        setProgress(data || {})
        setLoaded(true)
      })
    } else {
      setProgress(loadFromLocalStorage())
      setLoaded(true)
    }
  }, [])

  function setResult(index, result) {
    const next = { ...progress, [index]: result }
    setProgress(next)
    const isElectron = typeof window !== 'undefined' && window.electronAPI
    if (isElectron) {
      window.electronAPI.saveProgress(next)
    } else {
      saveToLocalStorage(next)
    }
  }

  function resetAll() {
    setProgress({})
    const isElectron = typeof window !== 'undefined' && window.electronAPI
    if (isElectron) {
      window.electronAPI.resetProgress()
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  return { progress, setResult, resetAll, loaded }
}
