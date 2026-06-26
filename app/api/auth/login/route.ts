import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        const response = await fetch(process.env.LDAP_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clientId: process.env.LDAP_CLIENT_ID,
                clientSecret: process.env.LDAP_CLIENT_SECRET,
                context: process.env.LDAP_CONTEXT,
                username,
                password,
                ldapPartner: process.env.LDAP_PARTNER,
            }),
        });

        const data = await response.json();

        const cookieStore = await cookies();

        cookieStore.set('accessToken', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 // 1 hour (adjust based on token expiry)
        });

        if (!response.ok) {
            return NextResponse.json(data, {
                status: response.status,
            });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: 'Unable to login',
            },
            {
                status: 500,
            }
        );
    }
}