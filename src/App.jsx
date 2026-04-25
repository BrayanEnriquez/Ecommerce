
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import SuccessPage from './pages/SuccessPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/about" element={<h1 className="text-2xl font-bold">Página Acerca de</h1>} />
    </Routes>
  )
}

export default App
