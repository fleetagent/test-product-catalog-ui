"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function ProductsPage() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => axios.get("/api/products").then((r) => r.data.products),
  });

  if (isLoading) return <div className="p-8">Loading products...</div>;
  if (error) return <div className="p-8 text-red-500">Failed to load products</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}
