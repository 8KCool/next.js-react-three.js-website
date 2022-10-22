import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { API_KEY, API_URL } from '../../util/constants'

type Data = {
  success: boolean
  data: string
}

export default async function CreateMilestone(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const milestoneObj = req.body
  const method = req.method
  try {
    switch (method) {
      case 'GET':
        res.status(200).json({ data: 'welcome', success: true })
        break
      case 'POST':
        await axios.post(
          `${API_URL}/milestone/create?apiKey=${API_KEY}&target_language='en'`,
          milestoneObj
        )
        res.status(200).json({ success: true, data: 'milestone created' })
        break
      default:
        res.status(405).json({ success: false, data: 'method is not allowed' })
    }
  } catch (e) {
    res
      .status(422)
      .json({ success: false, data: 'milestone could not created' })
  }
}
