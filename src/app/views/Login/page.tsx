'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()
  const { isLoggedIn, login } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/views/Products')
    }
  }, [isLoggedIn, router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    let hasError = false
    setEmailError('')
    setPasswordError('')

    if (!email) {
      setEmailError('Zadajte e-mailovú adresu')
      hasError = true
    }

    if (!password) {
      setPasswordError('Zadajte heslo')
      hasError = true
    }

    if (hasError) return

    login(email)
    router.push('/views/Products')
  }

	return (
		<div className="flex-1 flex items-center justify-center px-4 mt-2 md:mt-16 lg:mt-20">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-6 pt-6 pb-8 w-full max-w-md">
        <h1 className="text-xl font-bold mb-6 text-[#ff4500] text-left">Prihlásenie užívateľa</h1>

        <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`w-full p-2 border ${emailError ? 'border-red-500' : 'border-black'} mb-1`}
        />
        <p className="text-sm text-red-600 mb-4 min-h-[1.25rem]">
          {emailError || '\u00A0'}
        </p>

        <label htmlFor="password" className="block text-sm font-medium mb-1 text-black">Heslo</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`w-full p-2 border ${passwordError ? 'border-red-500' : 'border-black'} mb-1`}
        />
        <p className="text-sm text-red-600 mb-6 min-h-[1.25rem]">
          {passwordError || '\u00A0'}
        </p>

        <button
          type="submit"
          className="w-full bg-[#ff4500] mt-5 text-white font-bold py-3 uppercase text-sm hover:brightness-110 transition"
        >
          Prihlásiť
        </button>
      </form>
    </div>
  )
}