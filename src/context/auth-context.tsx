'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isLoggedIn: boolean
  userEmail: string
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true'
    const email = localStorage.getItem('userEmail') || ''
    setIsLoggedIn(logged)
    setUserEmail(email)
  }, [])

  const login = (email: string) => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userEmail', email)
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    setIsLoggedIn(false)
    setUserEmail('')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}