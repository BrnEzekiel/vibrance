import { useState } from 'react'
import axios from 'axios'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    const res = await axios.post("http://127.0.0.1:8000/api/v1/ai/chat", null, { params: { message } })
    setReply(res.data.response)
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Say something..." />
        <button type="submit">Send</button>
      </form>
      <p>AI: {reply}</p>
    </div>
  )
}
