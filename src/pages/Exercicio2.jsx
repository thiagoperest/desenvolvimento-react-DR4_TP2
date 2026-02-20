import BotaoVoltar from '../components/BotaoVoltar'
import FetchCategorias from '../components/FetchCategorias'
import './Exercicio2.css'

export default function Exercicio2() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 2: Lista de Categorias de Produtos</h1>
        <p>Busca de categorias usando useEffect</p>
      </div>

      <div className="exercicio-content">
        <FetchCategorias />
      </div>
    </div>
  )
}
