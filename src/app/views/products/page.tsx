'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth-context'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/views/Login') // presmerovanie na login
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
  }, [isLoggedIn])

  if (!isLoggedIn) return null // neukazuj nič, kým nie je prihlásený

  return (
    <div className="p-8">
      <div className="mb-6 border-b-2 pb-2" style={{ borderColor: 'var(--color-secondary)' }}>
        <h1 className="text-2xl font-bold">Produkty</h1>
      </div>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product: any) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}