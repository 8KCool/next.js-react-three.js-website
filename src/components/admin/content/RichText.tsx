// RichText.tsx in your components folder
import dynamic from 'next/dynamic'

export default dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
})
