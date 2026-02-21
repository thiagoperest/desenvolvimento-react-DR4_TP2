import BotaoVoltar from '../components/BotaoVoltar'
import ComponenteFilho from '../components/ComponenteFilho'
import { LanguageProvider } from '../contexts/LanguageContext'
import './Exercicio4.css'

export default function Exercicio4() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 4: Preferência de Idioma do Usuário</h1>
        <p>Gerenciamento de idioma usando Context API e useContext</p>
      </div>

      <div className="exercicio-content">
        <LanguageProvider>
          <ComponenteFilho />
        </LanguageProvider>
      </div>
    </div>
  )
}
