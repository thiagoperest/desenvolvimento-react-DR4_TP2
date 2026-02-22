import { useState, useReducer } from 'react'
import './PainelGlicemico.css'

function fatorReducer(state, action) {
  switch (action.type) {
    case 'SET_FIC':
      return {
        ...state,
        fic: action.payload
      }
    case 'SET_ALVO':
      return {
        ...state,
        alvo: action.payload
      }
    default:
      return state
  }
}

const initialFatorState = {
  fic: 10,
  alvo: 100
}

export default function PainelGlicemico() {
  const [glicemiaAtual, setGlicemiaAtual] = useState(120)
  const [carboidratosRefeicao, setCarboidratosRefeicao] = useState(50)
  const [fatores, dispatch] = useReducer(fatorReducer, initialFatorState)

  function handleAjusteRapido() {
    dispatch({ type: 'SET_FIC', payload: 8 })
    dispatch({ type: 'SET_ALVO', payload: 90 })
  }

  return (
    <div className="painel-glicemico">
      <h2>Painel de Controle Glicêmico</h2>

      <div className="campos-entrada">
        <div className="campo">
          <label htmlFor="glicemia-atual">Glicemia Atual (mg/dL):</label>
          <input
            type="number"
            id="glicemia-atual"
            value={glicemiaAtual}
            onChange={(e) => setGlicemiaAtual(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="carboidratos">Carboidratos da Refeição (g):</label>
          <input
            type="number"
            id="carboidratos"
            value={carboidratosRefeicao}
            onChange={(e) => setCarboidratosRefeicao(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="ajuste-rapido">
        <button onClick={handleAjusteRapido} className="btn-ajuste">
          Ajuste Rápido
        </button>
        <p className="info-ajuste">
          FIC: {fatores.fic} | Alvo: {fatores.alvo} mg/dL
        </p>
      </div>
    </div>
  )
}
