import { useState } from 'react'
import axios from 'axios'

export default function Payments() {
  const [amount, setAmount] = useState(0)
  const [phone, setPhone] = useState('')

  async function handlePayment(e: React.FormEvent) {
    e.preventDefault()
    const res = await axios.post("http://127.0.0.1:8000/api/v1/payments/pay", { amount, phone })
    alert(JSON.stringify(res.data))
  }

  return (
    <form onSubmit={handlePayment}>
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="Amount" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" />
      <button type="submit">Pay</button>
    </form>
  )
}
