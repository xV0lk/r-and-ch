import { FetchBody } from '../models/Global'

export default function fetcher(url: string, data?: FetchBody) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'post' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
