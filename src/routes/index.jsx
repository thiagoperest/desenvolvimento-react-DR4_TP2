import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Exercicio1 from '../pages/Exercicio1'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercicio-1" element={<Exercicio1 />} />
    </Routes>
  )
}
