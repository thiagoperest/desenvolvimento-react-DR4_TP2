import { useState, useEffect, useRef } from 'react'
import './SearchLogger.css'

export default function SearchLogger() {
  const [query, setQuery] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    console.log(`Termo de busca alterado: "${query}"`)
  }, [query])

  return (
    <div className="search-logger-container">
      <h2>Widget de Busca</h2>
      
      <div className="search-box">
        <label htmlFor="search">Digite sua busca:</label>
        <input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite algo para buscar..."
        />
      </div>

      <div className="search-info">
        <p><strong>Termo atual:</strong> {query || '(vazio)'}</p>
        <p className="console-hint">Abra o Console do navegador para ver as mensagens</p>
      </div>
    </div>
  )
}
