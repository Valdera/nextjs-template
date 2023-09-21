import { NextRequest, NextResponse } from 'next/server';

let count = 0;

export const POST = async (req: NextRequest) => {
  const { operation } = await req.json();

  switch (operation) {
    case 'INC':
      count += 1;
      break;
    case 'DEC':
      count -= 1;

      break;
    default:
      break;
  }

  return NextResponse.json({ count });
};

export const GET = async (_req: NextRequest) => {
  return NextResponse.json({ count });
};
