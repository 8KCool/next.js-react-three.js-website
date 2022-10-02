import { Button, Modal, Title } from '@mantine/core'
import ReactDOM from 'react-dom'

type Props = {
  title: string
  actionText: string
  onConfirm: () => void
  onClose: () => void
}

type ModalType = React.FC<Props> & {
  show: (title: string, actionText: string, onConfirm: () => void) => void
}

export const ConfirmModal: ModalType = ({
  title,
  actionText,
  onConfirm,
  onClose,
}: Props) => {
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Modal opened={true} onClose={onClose} size={'md'} withCloseButton={false}>
      <Title order={4}>{title}</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
        }}
      >
        <Button
          mr={'1rem'}
          variant="outline"
          color="red"
          onClick={handleConfirm}
        >
          {actionText}
        </Button>
        <Button variant="outline" color="gray" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

ConfirmModal.show = (
  title: string,
  actionText: string,
  onConfirm: () => void
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const handleClose = () => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }

  ReactDOM.render(
    <ConfirmModal
      title={title}
      actionText={actionText}
      onConfirm={onConfirm}
      onClose={handleClose}
    />,
    container
  )
}
