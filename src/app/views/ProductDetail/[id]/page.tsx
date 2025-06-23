'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import StarRating from '@/components/StarRating'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/views/Login')
      return
    }

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id, isLoggedIn, router])

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Načítavam...</div>
  }

  if (!product) {
    return <div className="p-8 text-center text-red-600">Produkt nebol nájdený.</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col sm:flex-row gap-8">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-xs object-contain"
        />
      </div>

      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <StarRating rating={product.rating.rate} count={product.rating.count} />
        <p className="text-xl font-semibold">{product.price} €</p>
        <p className="text-gray-700">{product.description}</p>

        <Link
          href="/views/Products"
          className="mt-6 inline-block bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition w-fit"
        >
          ← Späť na produkty
        </Link>
      </div>
    </div>
  )
}