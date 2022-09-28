import React, {
  ReactNode,
  useState,
  useContext,
  useEffect,
  ReactElement,
} from 'react'
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Image,
  Button,
  Text,
} from '@mantine/core'
import {
  TablerIcon,
  IconArticle,
  IconLogout,
  IconMenu2,
  IconX,
  IconUsers,
  IconFiles,
  IconUser,
  IconMail,
  IconLanguage,
  IconCaretDown,
  IconCaretUp,
  IconClipboardText,
  IconList,
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
    position: 'relative',
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

  dropdown: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}))

interface LinksProp {
  icon: TablerIcon
  label: string
  links?: {
    icon: ReactElement<any, any>
    label: string
  }[]
}

interface NavbarLinkProps extends LinksProp {
  active?: string
  onClick?(): void
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  links,
}: NavbarLinkProps) {
  const router = useRouter()
  const isSublinkOpened = Boolean(
    links?.some((e) => e.label === router.pathname.replace('/admin/', ''))
  )
  const { classes, cx } = useStyles()
  const [isOpen, setIsOpen] = useState<boolean>(isSublinkOpened)

  const subLinks =
    isOpen &&
    links &&
    links.map((item, index) => (
      <Tooltip
        label={item.label}
        position="right"
        transitionDuration={1}
        key={`${item.label}-${index}`}
      >
        <UnstyledButton
          onClick={() => router.push(`/admin/${item.label}`)}
          className={cx(classes.link, {
            [classes.active]: item.label === active,
          })}
        >
          {item.icon}
        </UnstyledButton>
      </Tooltip>
    ))

  const _onClick = () => {
    if (links) {
      return setIsOpen(!isOpen)
    }

    void router.push(`/admin/${label}`)

    return onClick && onClick()
  }

  const dropdown = !links ? null : !isOpen ? (
    <IconCaretDown width={16} height={16} className={classes.dropdown} />
  ) : (
    <IconCaretUp width={16} height={16} className={classes.dropdown} />
  )

  return (
    <>
      <Tooltip label={label} position="right" transitionDuration={0}>
        <UnstyledButton
          onClick={_onClick}
          className={cx(classes.link, {
            [classes.active]:
              active === label || links?.some((e) => e.label === active),
          })}
        >
          {dropdown}
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
      {subLinks}
    </>
  )
}

const navLinks: LinksProp[] = [
  {
    icon: IconUser,
    label: 'admin',
    links: [
      { label: 'mailinglist', icon: <IconMail stroke={0.5} /> },
      { label: 'managelanguages', icon: <IconLanguage stroke={0.5} /> },
    ],
  },
  { icon: IconArticle, label: 'posts' },
  { icon: IconUsers, label: 'teammembers' },
  { icon: IconFiles, label: 'teammembers-proposals' },
  { icon: IconFiles, label: 'documents' },
  { icon: IconClipboardText, label: 'proposals' },
  { icon: IconList, label: 'content' },
]

//Creating admin context
const AppContext = React.createContext({})
const AppProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const checkLoggedIn = async () => {
    console.log('checking if logged in')
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
  const [active, setActive] = useState<string>('')
  const router = useRouter()
  const { classes } = useStyles()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      void router.push('/admin/login')
    }

    setActive(router.pathname.replace('/admin/', ''))
  }, [router])

  const handleLogout = async () => {
    localStorage.removeItem('access_token')
    void router.push('/admin/login')
  }

  const links = navLinks.map((link, index) => (
    <NavbarLink
      icon={link.icon}
      label={link.label}
      links={link.links}
      key={`${link.label}-${index}`}
      active={active}
      onClick={() => {
        setActive(link.label)
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
