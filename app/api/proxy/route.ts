import { NextRequest, NextResponse } from 'next/server';
import { apiRequest } from '../../../lib/api-client';

export async function POST(request: NextRequest) {
    try {
        const {
            method,
            url,
            body,
        } = await request.json();

        const response = await apiRequest(url, {
            method,
            body: body
                ? JSON.stringify(body)
                : undefined,
        });

        const data = await response.json();

        return NextResponse.json({
            status: response.status,
            data,
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                message: 'API call failed',
            },
            {
                status: 500,
            }
        );
    }
}