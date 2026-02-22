import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const exercicios = [
    {
      id: 1,
      titulo: 'Formulário de Login Simples',
      descricao: 'Formulário de login usando useState com um único objeto',
      rota: '/exercicio-1'
    },
    {
      id: 2,
      titulo: 'Lista de Categorias de Produtos',
      descricao: 'Busca de categorias usando useEffect',
      rota: '/exercicio-2'
    },
    {
      id: 3,
      titulo: 'Mensagem Logada no Console',
      descricao: 'useEffect após primeira renderização e quando a query mudar',
      rota: '/exercicio-3'
    },
    {
      id: 4,
      titulo: 'Preferência de Idioma do Usuário',
      descricao: 'Gerenciamento de idioma usando Context API e useContext',
      rota: '/exercicio-4'
    },
    {
      id: 5,
      titulo: 'Descontos a um Carrinho de Compras',
      descricao: 'Gerenciamento de estado com useReducer',
      rota: '/exercicio-5'
    }
  ]

  return (
    <div className="home-container">
      <h1>Desenvolvimento Web com React</h1>
      <p className="subtitle">TP2</p>
      
      <div className="exercicios-grid">
        {exercicios.map((exercicio) => (
          <Link to={exercicio.rota} key={exercicio.id} className="exercicio-card">
            <h2>Exercício {exercicio.id}</h2>
            <h3>{exercicio.titulo}</h3>
            <p>{exercicio.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
