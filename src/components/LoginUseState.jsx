import { useState } from 'react'
import './LoginUseState.css'

export default function LoginUseState() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    alert(`Login realizado!\nUsuário: ${formData.username}\nSenha: ${formData.password}`)
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Digite seu nome de usuário"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="pwd"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Entrar
        </button>
      </form>

      <div className="form-state">
        <h3>Estado Atual do Formulário:</h3>
        <p><strong>Usuário:</strong> {formData.username || '(vazio)'}</p>
        <p><strong>Senha:</strong> {formData.password || '(vazio)'}</p>
      </div>
    </div>
  )
}
