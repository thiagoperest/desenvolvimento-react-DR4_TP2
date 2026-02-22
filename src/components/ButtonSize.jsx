import { useState, useRef, useLayoutEffect } from 'react'
import './ButtonSize.css'

export default function ButtonSize() {
  const [width, setWidth] = useState(0)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth
      setWidth(buttonWidth)
    }
  }, [])

  return (
    <div className="button-size-container">
      <h2>Medição de Largura do Botão</h2>
      
      <div className="button-wrapper">
        <button ref={buttonRef} className="measured-button">
          Botão de Largura
        </button>
      </div>

      <div className="size-display">
        <h3>Largura do Botão</h3>
        <p className="width-value">{width}px</p>
      </div>
    </div>
  )
}
