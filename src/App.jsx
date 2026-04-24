
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/about" element={<h1 className="text-2xl font-bold">Página Acerca de</h1>} />
    </Routes>
  )
}

export default App
