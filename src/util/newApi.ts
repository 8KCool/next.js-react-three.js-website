import axios from 'axios'

export const newApi = () => {
  const newApi = axios.create({
    baseURL: `https://test1.trigan.org/api/v1`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      apiKey: `${process.env.GET_API_KEY}`,
      // target_language: 'en',
    },
  })
  return newApi
}
