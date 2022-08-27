import { API_KEY, TEST_API_URL } from '../../util/constants'
import { ReactNode, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core'
import toast from 'react-hot-toast'
import { useAdminContext } from '../../components/layouts/AdminLayout'

interface LoginProps {
  children?: ReactNode
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { checkLoggedIn }: any = useAdminContext()
  const router = useRouter()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    console.log('were in')
    try {
      const user: any = await axios.post(
        `${TEST_API_URL}/auth/login`,
        {
          username: email,
          password,
        },
        { params: { apiKey: API_KEY } }
      )
      console.log('request Done')
      console.log(user)
      localStorage.setItem('access_token', user.data.Data.Data.acess_token)
      console.log('saved to lcaol storage')
      try {
        checkLoggedIn()
      } catch (error) {
        console.log('error chcek Logged in')
      }
      console.log('checked if logged in')
      console.log('ok')
      router.push('/admin/posts')
    } catch (error: any) {
      console.log('problem')
      console.log('error', error.response)
      if (error.response.status === 401) {
        toast.error('Wrong username or password')
      } else {
        const errorMsg = (error.response.data.Data.Message ||
          'occurred') as string
        toast.error(errorMsg)
      }
      // toast.error('An error occured')
    }
  }
  return (
    <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={onSubmit}>
            <TextInput
              label="Username"
              placeholder="Your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{ backgroundColor: 'rgb(34, 139, 230)!important' }}
              type="submit"
              fullWidth
              mt="xl"
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Login
