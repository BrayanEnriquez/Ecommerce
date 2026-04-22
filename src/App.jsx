
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-2xl font-bold">Página de Inicio</h1>} />
      <Route path="/about" element={<h1 className="text-2xl font-bold">Página Acerca de</h1>} />
    </Routes>
  )
}

export default App
