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

interface LoginProps {
  children?: ReactNode
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const onSubmit = async () => {
    try {
      await axios.post('/api/login', { email, password })
      return router.push('/admin/posts')
    } catch (error: any) {
      if (error.response.status === 400) return toast.error('Wrong password')
      toast.error('Something went wrong')
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
              label="Email"
              placeholder="email@example.com"
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
