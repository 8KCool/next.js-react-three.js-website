import React, { ReactNode, useState, useContext } from 'react'
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Image,
  Button,
} from '@mantine/core'
import {
  TablerIcon,
  IconArticle,
  IconLogout,
  IconMenu2,
  IconX,
  IconUsers,
  IconFiles,
} from '@tabler/icons'
import { useRouter } from 'next/router'
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'

interface AdminLayoutProps {
  children?: ReactNode
}

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  slideLeft: {
    transform: 'translateX(-80px)',
    transition: 'transform 0.3s ease',
  },
  slideRight: {
    transform: 'translateX(calc(100vw - 80px))',
    transition: 'transform 0.3s ease',
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}))

interface NavbarLinkProps {
  icon: TablerIcon
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const navLinks = [
  { icon: IconArticle, label: 'posts' },
  { icon: IconUsers, label: 'teammembers' },
  { icon: IconFiles, label: 'teammembers-proposals' },
  { icon: IconFiles, label: 'documents' },
]

//Creating admin context
const AppContext = React.createContext({})
const AppProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const checkLoggedIn = async () => {
    try {
      await axios.get(`${TEST_API_URL}/posts`, {
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      })
      setIsLoggedIn(true)
      return true
    } catch (error) {
      setUser({})
      setIsLoggedIn(false)
      return false
    }
  }
  return (
    <AppContext.Provider value={{ isLoggedIn, user, checkLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
export const useAdminContext = () => {
  return useContext(AppContext)
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [active, setActive] = useState(0)
  const router = useRouter()
  const { classes } = useStyles()
  const [open, setOpen] = useState(false)

  React.useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      router.push('/admin/login')
    }
  })

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    router.push('/admin/login')
  }

  const links = navLinks.map((link, index) => (
    <NavbarLink
      {...link}
      key={`${link.label}-${index}`}
      active={index === active}
      onClick={() => {
        setActive(index)
        void router.push(`/admin/${link.label}`)
      }}
    />
  ))

  return (
    <AppProvider>
      <Center
        sx={{
          position: 'fixed',
          left: 0,
          top: 5,
          width: '80px',
          zIndex: 999999,
        }}
        onClick={() => setOpen(open ? false : true)}
      >
        <Button size="xs" variant="white" color="dark" compact>
          {!open ? <IconX /> : <IconMenu2 />}
        </Button>
      </Center>
      <div
        className={open ? classes.slideRight : ''}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          width: 'calc(100vw - 80px)',
          height: '100vh',
          zIndex: 999999,
        }}
        onClick={() => setOpen(true)}
      ></div>
      <Navbar
        sx={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          transition: 'transform 0.3s ease',
        }}
        className={open ? classes.slideLeft : ''}
        width={{ base: 80 }}
        p="md"
      >
        <Center sx={{ marginTop: '1rem' }}>
          <Image src="/images/trigan-logo.svg" alt="trigan logo" />
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink
              icon={IconLogout}
              label="Logout"
              onClick={handleLogout}
            />
          </Stack>
        </Navbar.Section>
      </Navbar>
      <main style={{ display: 'flex', height: '100%' }}>
        <section style={{ margin: '2rem auto', minWidth: 'calc(100vw-80px)' }}>
          {children}
        </section>
      </main>
    </AppProvider>
  )
}

export default AdminLayout
