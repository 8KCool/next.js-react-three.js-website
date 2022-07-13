import axios from 'axios'
import { FormEvent, ReactNode, useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import { AUTH_API_KEY, AUTH_API_URL } from '../../../util/constants'

interface ModalProps {
  children?: ReactNode
}

export const Modal: React.FC<ModalProps> = () => {
  const [address, setAddress] = useState('')
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    if (address) {
      try {
        const { data } = await axios.get(
          `${AUTH_API_URL}/user/${address}?api_key=${AUTH_API_KEY}`
        )
        console.log('data: ', data)
      } catch (e) {
        console.log('error: ', e)
      }
    }
  }
  return (
    <div className="relative top-20 mx-auto w-96 rounded-md bg-grey p-5 shadow-lg">
      <div className="mt-3 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <FaWallet className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-medium leading-6 text-light">
          Wallet Address
        </h3>
        <form onSubmit={submitHandler} className="mt-2 px-7 py-3">
          <label
            htmlFor="address"
            className="inline-block w-full text-gray-700"
          >
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none"
              id="address"
              placeholder="Enter wallet address"
            />
          </label>
          <div className="items-center py-3">
            <button
              type="submit"
              className="w-full rounded-md bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
