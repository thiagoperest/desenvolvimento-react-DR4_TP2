import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import './ComponenteFilho.css'

export default function ComponenteFilho() {
  const { language, changeLanguage } = useContext(LanguageContext)

  const languages = [
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'en-US', name: 'English (US)' },
    { code: 'es-ES', name: 'Español' },
    { code: 'fr-FR', name: 'Français' }
  ]

  return (
    <div className="componente-filho-container">
      <h2>Preferência de Idioma</h2>
      
      <div className="language-selector">
        <label htmlFor="language">Selecione o idioma:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="language-display">
        <h3>Idioma Atual</h3>
        <p className="current-language">{language}</p>
        <p className="language-name">
          {languages.find(lang => lang.code === language)?.name}
        </p>
      </div>
    </div>
  )
}
