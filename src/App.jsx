
import { Routes, Route, Link } from 'react-router-dom'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-2xl font-bold text-center mt-10">Página de Inicio <br/> <Link to="/login" className="text-blue-500 underline text-lg">Ir a Login</Link></h1>} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/about" element={<h1 className="text-2xl font-bold">Página Acerca de</h1>} />
    </Routes>
  )
}

export default App
