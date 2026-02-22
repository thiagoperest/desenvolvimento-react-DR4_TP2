import { createContext, useReducer } from 'react'

export const FatorContext = createContext()

function fatorReducer(state, action) {
  switch (action.type) {
    case 'SET_FIC':
      return {
        ...state,
        fic: action.payload
      }
    case 'SET_ALVO':
      return {
        ...state,
        alvo: action.payload
      }
    default:
      return state
  }
}

const initialFatorState = {
  fic: 10,
  alvo: 100
}

export function FatorProvider({ children }) {
  const [fatores, dispatch] = useReducer(fatorReducer, initialFatorState)

  return (
    <FatorContext.Provider value={{ fatores, dispatch }}>
      {children}
    </FatorContext.Provider>
  )
}
