import React, { ReactNode } from 'react'
import useEarlyAccessModal from '../../../../hooks/useEarlyAccessModal'

interface EarlyAccessButtonProps {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
}

export const EarlyAccessButton: React.FC<EarlyAccessButtonProps> = ( {className, style} )  => {
  const { setModal } = useEarlyAccessModal()
 
  return (
      <button
        role="button"
        className={className}
        style={style}
        onClick={() =>
          setModal({ open: true, type: 'create', size: '' })
        }
      >
        Early Access
      </button>
  )
}
