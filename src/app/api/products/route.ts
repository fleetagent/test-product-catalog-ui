import { NextResponse } from "next/server";

const CATALOG_API = process.env.CATALOG_API_URL || "http://localhost:3002";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const url = category ? `${CATALOG_API}/products?category=${category}` : `${CATALOG_API}/products`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${CATALOG_API}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: 201 });
}
