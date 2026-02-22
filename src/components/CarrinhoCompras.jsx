import { useReducer, useState } from 'react'
import './CarrinhoCompras.css'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        id: Date.now(),
        nome: action.payload.nome,
        preco: action.payload.preco,
        quantidade: 1
      }
      return {
        ...state,
        items: [...state.items, newItem]
      }
    
    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discount: action.payload
      }
    
    default:
      return state
  }
}

const initialState = {
  items: [],
  discount: 0
}

export default function CarrinhoCompras() {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [itemNome, setItemNome] = useState('')
  const [itemPreco, setItemPreco] = useState('')
  const [desconto, setDesconto] = useState('')

  const handleAddItem = (e) => {
    e.preventDefault()
    if (itemNome && itemPreco) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          nome: itemNome,
          preco: parseFloat(itemPreco)
        }
      })
      setItemNome('')
      setItemPreco('')
    }
  }

  const handleApplyDiscount = (e) => {
    e.preventDefault()
    const discount = parseFloat(desconto)
    if (discount >= 0 && discount <= 100) {
      dispatch({
        type: 'APPLY_DISCOUNT',
        payload: discount
      })
    }
  }

  const calcularTotal = () => {
    return state.items.reduce((total, item) => total + (item.preco * item.quantidade), 0)
  }

  const calcularTotalComDesconto = () => {
    const total = calcularTotal()
    return total - (total * state.discount / 100)
  }

  return (
    <div className="carrinho-container">
      <h2>Carrinho de Compras</h2>

      <div className="carrinho-forms">
        <form className="add-item-form" onSubmit={handleAddItem}>
          <h3>Adicionar Item</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nome do item"
              value={itemNome}
              onChange={(e) => setItemNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              step="0.01"
              placeholder="Preço"
              value={itemPreco}
              onChange={(e) => setItemPreco(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-add">Adicionar ao Carrinho</button>
        </form>

        <form className="discount-form" onSubmit={handleApplyDiscount}>
          <h3>Aplicar Desconto</h3>
          <div className="form-group">
            <input
              type="number"
              step="1"
              min="0"
              max="100"
              placeholder="Desconto (%)"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-discount">Aplicar Desconto</button>
        </form>
      </div>

      <div className="carrinho-items">
        <h3>Itens no Carrinho</h3>
        {state.items.length === 0 ? (
          <p className="empty-cart">Carrinho vazio</p>
        ) : (
          <ul>
            {state.items.map((item) => (
              <li key={item.id}>
                <span className="item-name">{item.nome}</span>
                <span className="item-price">R$ {item.preco.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="carrinho-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>R$ {calcularTotal().toFixed(2)}</span>
        </div>
        {state.discount > 0 && (
          <div className="summary-row discount-row">
            <span>Desconto ({state.discount}%):</span>
            <span>- R$ {(calcularTotal() * state.discount / 100).toFixed(2)}</span>
          </div>
        )}
        <div className="summary-row total-row">
          <span>Total:</span>
          <span>R$ {calcularTotalComDesconto().toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
