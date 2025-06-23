'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

// Typovanie pre produkty
interface Product {
  id: number
  title: string
  image: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(0)
  const sliderInterval = 6000
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % Math.ceil(products.length / 3))
    }, sliderInterval)
    return () => clearInterval(interval)
  }, [products])

  const pagedProducts = products.slice(page * 3, page * 3 + 3)

  return (
    <div className="flex flex-col justify-center w-full">
    <div className="w-full text-white text-center text-base py-2" style={{ backgroundColor: 'var(--color-secondary)' }}>
      {isLoggedIn ? (
        <div>
          <p>Vitajte späť! Môžete pokračovať do sekcie produktov.</p>
          <Link
            href="/views/Products"
            className="inline-block mt-2 bg-white text-black font-semibold py-1 px-3 rounded hover:bg-gray-100 transition"
          >
            Prejsť na produkty
          </Link>
        </div>
      ) : (
        <p>Vitajte! Pre prístup k ponuke produktov sa prosím prihláste.</p>
      )}
    </div>
      {/* Product Slider */}
      <div className="w-full max-w-5xl overflow-hidden mt-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pagedProducts.map((product) => (
            <div key={product.id} className="bg-white shadow rounded p-4 h-64 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full max-h-52"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
