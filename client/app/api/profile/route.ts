import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'You are not logged in' });
}
