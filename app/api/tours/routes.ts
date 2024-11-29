import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const tours = await prisma.tour.findMany({
      include: { location: true },
    })
    return NextResponse.json(tours)
  } catch (error) {
    console.error('Error fetching tours:', error)
    return NextResponse.json({ error: 'Error fetching tours' }, { status: 500 })
  }
}

