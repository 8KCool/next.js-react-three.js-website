import { AxiosError } from "axios"

export const determineAxios = (e: AxiosError | any): e is AxiosError => {
  return e.isAxiosError
}