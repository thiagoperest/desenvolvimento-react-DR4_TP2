import { useContext } from 'react'
import { FatorContext } from '../contexts/FatorContext'
import './ExibirFatores.css'

export default function ExibirFatores() {
  const { fatores } = useContext(FatorContext)

  return (
    <div className="exibir-fatores">
      <h3>Fatores de Conversão</h3>
      <div className="fatores-grid">
        <div className="fator-item">
          <span className="fator-label">FIC (Fator Insulina/Carbo):</span>
          <span className="fator-valor">{fatores.fic}</span>
        </div>
        <div className="fator-item">
          <span className="fator-label">Glicemia Alvo:</span>
          <span className="fator-valor">{fatores.alvo} mg/dL</span>
        </div>
      </div>
    </div>
  )
}
