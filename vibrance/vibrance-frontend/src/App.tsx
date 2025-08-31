import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import Chat from './pages/Chat'

function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/chat">AI Chat</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default App
