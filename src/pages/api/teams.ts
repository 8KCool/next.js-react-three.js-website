import dbConnect from '../../lib/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'
import Team from '../../models/Team'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const teams = await Team.find(
          {}
        ) /* find all the data in our database */
        res.status(200).json({ success: true, data: teams })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const team = await Team.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: team })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
