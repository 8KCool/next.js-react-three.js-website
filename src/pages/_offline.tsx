import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { GlobalLayout } from '../components/layouts/GlobalLayout'
import { Title } from '../components/shared/Title'

interface OfflineProps {
  children?: ReactNode
}

const Offline: React.FC<OfflineProps> = () => {
  const router = useRouter()
  return (
    <GlobalLayout>
      <Title title="No Internet Connection" />
      <div className="max-w-2xl">
        <p>It look&#39;s like you are not connected to the internet</p>
        <button className="btn-primary" onClick={() => router.reload()}>
          Reload Page
        </button>
      </div>
    </GlobalLayout>
  )
}

export default Offline
