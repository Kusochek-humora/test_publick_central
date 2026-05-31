const BASE_URL = 'http://89.219.32.4:3000'

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }))
    throw Object.assign(new Error(error.message ?? 'Request failed'), { status: res.status, data: error })
  }
  return res.json()
}
