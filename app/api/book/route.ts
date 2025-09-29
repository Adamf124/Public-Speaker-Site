// app/api/book/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // In a real implementation this handler would send an email or write
  // to a database. Here we simply simulate a short delay and return
  // success. No user data is logged or processed beyond this function.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json({ success: true });
}