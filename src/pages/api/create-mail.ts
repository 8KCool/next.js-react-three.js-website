import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { API_KEY, API_URL } from '../../util/constants'

type Data = {
  success: boolean
}

export default async function CreateMail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const values = req.body
  try {
    await axios.post(`${API_URL}/mailinglist/create?apiKey=${API_KEY}`, values)
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(422).json({ success: false })
  }
}
