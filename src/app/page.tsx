'use client'

import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
      <h2 className="text-white text-center text-base" style={{ backgroundColor: 'var(--color-secondary)'}}>Vitajte! Pre prístup k ponuke produktov sa prosím prihláste.</h2>
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
