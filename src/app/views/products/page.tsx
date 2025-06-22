'use client'

import { useEffect, useState } from 'react'

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testovacia stránka – Produkty</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product: any) => (
          <li
            key={product.id}
            className="p-4 border rounded shadow hover:bg-gray-50 transition"
          >
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}