import BotaoVoltar from '../components/BotaoVoltar'
import CarrinhoCompras from '../components/CarrinhoCompras'
import './Exercicio5.css'

export default function Exercicio5() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 5: Descontos a um Carrinho de Compras</h1>
        <p>Gerenciamento de estado com useReducer</p>
      </div>

      <div className="exercicio-content">
        <CarrinhoCompras />
      </div>
    </div>
  )
}
