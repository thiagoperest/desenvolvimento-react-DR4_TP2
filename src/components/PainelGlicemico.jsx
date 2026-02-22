import { useState, useEffect, useMemo, useContext } from 'react'
import { FatorContext } from '../contexts/FatorContext'
import './PainelGlicemico.css'

const FSI = 50

export default function PainelGlicemico() {
  const [glicemiaAtual, setGlicemiaAtual] = useState(120)
  const [carboidratosRefeicao, setCarboidratosRefeicao] = useState(50)
  const { fatores, dispatch } = useContext(FatorContext)

  function handleAjusteRapido() {
    dispatch({ type: 'SET_FIC', payload: 8 })
    dispatch({ type: 'SET_ALVO', payload: 90 })
  }

  useEffect(() => {
    console.log(`[Monitoramento] Glicemia alterada para: ${glicemiaAtual} mg/dL`)
    
    if (glicemiaAtual < 70) {
      console.log('ALERTA: Hipoglicemia. Favor consumir carboidratos!')
    }
  }, [glicemiaAtual])

  const doseCorretiva = useMemo(() => {
    const diferenca = glicemiaAtual - fatores.alvo
    if (diferenca <= 0) {
      return 0
    }
    return diferenca / FSI
  }, [glicemiaAtual, fatores.alvo])

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

      <div className="dose-corretiva">
        <h3>Dose de Correção</h3>
        <p className="dose-valor">{doseCorretiva.toFixed(2)} U</p>
        {doseCorretiva === 0 && (
          <p className="dose-info">Glicemia dentro ou abaixo do alvo. Sem correção necessária.</p>
        )}
      </div>
    </div>
  )
}
