interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>
    </div>
  );
}
