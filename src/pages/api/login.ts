import { withSessionRoute } from '../../lib/withSession'
import { API_KEY, TEST_API_URL } from '../../util/constants'
import axios from 'axios'

export default withSessionRoute(async (req, res) => {
  // get user from database then:
  try {
    const user: any = await axios.post(
      TEST_API_URL,
      {
        email: req.body.email,
        password: req.body.password,
      },
      { params: { apiKey: API_KEY } }
    )
    localStorage.setItem('access_token', user.Data.access_token as string)
    req.session.user = {
      id: 4,
      // access_token: user.Data.access_token,
    }

    await req.session.save()
    res.send('Logged in')
  } catch (error: any) {
    res.status(Number(error && error.response.status)).json({})
  }
})
