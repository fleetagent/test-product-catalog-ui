import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
      <Link href="/products" className="text-blue-600 underline">
        Browse Products →
      </Link>
    </main>
  );
}
