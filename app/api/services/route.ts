import { NextResponse } from 'next/server';
import config from '../../../lib/config';

export async function GET() {

  const services = Object.entries(config.services)
    .map(([key, value]) => ({
      name: key,
      uri: value.uri,
    }));

  return NextResponse.json(services);
}