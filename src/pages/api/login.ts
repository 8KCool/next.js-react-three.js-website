import { withSessionRoute } from '../../lib/withSession'

export default withSessionRoute(async (req, res) => {
  // get user from database then:
  req.session.user = {
    id: 4,
  }
  await req.session.save()
  res.send('Logged in')
})
