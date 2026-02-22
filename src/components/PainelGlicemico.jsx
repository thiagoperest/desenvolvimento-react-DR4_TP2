import { useState } from 'react'
import './PainelGlicemico.css'

export default function PainelGlicemico() {
  const [glicemiaAtual, setGlicemiaAtual] = useState(120)
  const [carboidratosRefeicao, setCarboidratosRefeicao] = useState(50)
  const [fatorInsulinaCarbo, setFatorInsulinaCarbo] = useState(10)
  const [glicemiaAlvo, setGlicemiaAlvo] = useState(100)

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
    </div>
  )
}
