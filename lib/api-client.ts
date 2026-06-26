import { cookies } from 'next/headers';

export async function apiRequest(
  url: string,
  options: RequestInit = {}
) {

  const token = (await cookies())
    .get('accessToken')
    ?.value;

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}