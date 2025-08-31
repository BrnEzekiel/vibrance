import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const formData = new URLSearchParams()
    formData.append("username", username)
    formData.append("password", password)
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", formData)
    localStorage.setItem("token", res.data.access_token)
    alert("Logged in!")
  }

  return (
    <form onSubmit={handleLogin}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}
