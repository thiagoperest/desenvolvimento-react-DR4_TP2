import BotaoVoltar from '../components/BotaoVoltar'
import SearchLogger from '../components/SearchLogger'
import './Exercicio3.css'

export default function Exercicio3() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 3: Mensagem Logada no Console</h1>
        <p>useEffect após primeira renderização e quando a query mudar</p>
      </div>

      <div className="exercicio-content">
        <SearchLogger />
      </div>
    </div>
  )
}
