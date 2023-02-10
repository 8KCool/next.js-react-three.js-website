import { ReactNode } from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import { Title } from '../components/shared/Title'

interface OfflineProps {
  children?: ReactNode
}

const Offline: React.FC<OfflineProps> = () => {
  return (
    <GlobalLayout>
      <Title title="No Internet Connection" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-2xl font-semibold">
          It look&#39;s like you are not connected to the internet
        </p>
        <button className="btn-primary" onClick={() => location.reload()}>
          Reload Page
        </button>
      </div>
    </GlobalLayout>
  )
}

export default Offline
