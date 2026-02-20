import { Link } from 'react-router-dom'
import './BotaoVoltar.css'

export default function BotaoVoltar() {
  return (
    <Link to="/" className="btn-voltar">
      Voltar
    </Link>
  )
}
