import BotaoVoltar from '../components/BotaoVoltar'
import PainelGlicemico from '../components/PainelGlicemico'
import './MiniProjeto.css'

export default function MiniProjeto() {
  return (
    <div className="mini-projeto-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Mini Controle Glicêmico para Diabéticos</h1>
        <p>Sistema de cálculo de insulina baseado em glicemia e carboidratos</p>
      </div>

      <div className="mini-projeto-content">
        <PainelGlicemico />
      </div>
    </div>
  )
}
