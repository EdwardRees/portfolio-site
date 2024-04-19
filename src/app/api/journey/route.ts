import { NextRequest, NextResponse } from 'next/server';
import data from './data.json';

export async function GET (req: NextRequest): NextResponse { 
  return NextResponse.json(data);
 //  return NextResponse.json("Hello World");
}

