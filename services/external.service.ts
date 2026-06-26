export async function executeApi(
  method: string,
  url: string,
  body?: any
) {

  const response = await fetch('/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method,
      url,
      body,
    }),
  });

  return response.json();
}