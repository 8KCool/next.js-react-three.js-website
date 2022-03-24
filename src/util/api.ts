import axios from 'axios'
import { API_KEY, API_URL } from './constants'

export const api = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      apiKey: `${API_KEY}`,
      // target_language: 'en',
    },
  })
  return api
}
