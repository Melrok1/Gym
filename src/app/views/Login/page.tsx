'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { isLoggedIn, login } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/views/Products')
    }
  }, [isLoggedIn, router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      login(email)
      router.push('/views/Products')
    } else {
      alert('Zadaj email aj heslo')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Prihlásenie</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Heslo"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Prihlásiť sa
        </button>
      </form>
    </div>
  )
}