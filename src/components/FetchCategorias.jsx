import { useState, useEffect } from 'react'
import './FetchCategorias.css'

export default function FetchCategorias() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/categorias.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar categorias')
        }
        return response.json()
      })
      .then(data => {
        setCategorias(data.categorias)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Carregando categorias...</div>
  }

  if (error) {
    return <div className="error">Erro: {error}</div>
  }

  return (
    <div className="categorias-container">
      <h2>Categorias de Produtos</h2>
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-card">
            <h3>{categoria.nome}</h3>
            <p>{categoria.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
