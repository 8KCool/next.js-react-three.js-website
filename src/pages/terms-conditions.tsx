import { ReactNode } from 'react'
import { GlobalLayout } from './../components/layouts/GlobalLayout'

interface TermsAndConditionsProps {
  children?: ReactNode
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = () => {
  return <GlobalLayout></GlobalLayout>
}

export default TermsAndConditions
