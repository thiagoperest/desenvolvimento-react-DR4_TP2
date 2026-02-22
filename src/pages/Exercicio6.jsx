import BotaoVoltar from '../components/BotaoVoltar'
import ButtonSize from '../components/ButtonSize'
import './Exercicio6.css'

export default function Exercicio6() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 6: Largura Total Exibida Imediatamente</h1>
        <p>Medição de DOM com useRef e useLayoutEffect - sem flicker</p>
      </div>

      <div className="exercicio-content">
        <ButtonSize />
      </div>
    </div>
  )
}
