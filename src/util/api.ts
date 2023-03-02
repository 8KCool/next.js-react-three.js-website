import axios, { AxiosError } from 'axios'
import { API_KEY, API_URL, GET_API_KEY } from './constants'
import { determineAxios } from './determines'

export const api = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      apiKey: `${GET_API_KEY}`,
      // target_language: 'en',
    },
  })
  return api
}

export const getErrorMsg = (error: AxiosError | unknown): string => {
  if (determineAxios(error)) {
    return error.response?.data.Data?.Message || error.message
  }

  return 'An error occurred'
}