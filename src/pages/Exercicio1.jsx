import BotaoVoltar from '../components/BotaoVoltar'
import LoginUseState from '../components/LoginUseState'
import './Exercicio1.css'

export default function Exercicio1() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 1: Formulário de Login Simples</h1>
        <p>Formulário de login usando useState com um único objeto</p>
      </div>

      <div className="exercicio-content">
        <LoginUseState />
      </div>
    </div>
  )
}
