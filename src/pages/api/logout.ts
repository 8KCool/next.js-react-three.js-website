import { withSessionRoute } from '../../lib/withSession'

export default withSessionRoute((req, res) => {
  req.session.destroy()
  res.send('Logged out')
})
