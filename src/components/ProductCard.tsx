type Product = {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-4 border rounded shadow hover:bg-gray-50 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  )
}