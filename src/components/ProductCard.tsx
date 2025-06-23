import StarRating from "@/components/StarRating"
import Link from "next/link"

type Product = {
  id: number
  title: string
  price: number
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-4 rounded shadow hover:bg-gray-50 transition h-full max-w-xs sm:max-w-sm mx-auto">
			<Link href={`/views/ProductDetail/${product.id}`}>
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-40 object-contain mb-2"
				/>
				<h2 className="font-semibold text-lg line-clamp-2 flex-grow">{product.title}</h2>
				<StarRating rating={product.rating.rate} count={product.rating.count} className="my-2" />
				<p className="text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>{product.price} €</p>
			</Link>
    </div>
  )
}