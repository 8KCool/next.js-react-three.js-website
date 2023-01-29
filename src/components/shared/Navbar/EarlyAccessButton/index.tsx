import React, { ReactNode, useEffect } from 'react'
import useEarlyAccessModal from '../../../../hooks/useEarlyAccessModal'
import { Imodal } from '../../../admin/mailinglist/MailingModal'
import { SignUpModal } from '../../../home/HeroSection/SignUpModal'

interface EarlyAccessButtonProps {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
}

export const EarlyAccessButton: React.FC<EarlyAccessButtonProps> = ( {className, style} )  => {
  const {  setModal, modal } = useEarlyAccessModal()

  return (
    <>
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

      <SignUpModal modal={modal} setModal={function (value: React.SetStateAction<Imodal>): void {
        throw new Error('Function not implemented.')
        } } selectedPost={undefined} setSelectedPost={undefined} fetchFunction={function (): Promise<void> {
        throw new Error('Function not implemented.')
        } }
      />
    </>
  )
}


