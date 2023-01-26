import { Modal, Title } from '@mantine/core'
import React from 'react'

interface ContentPhaseModalProps {
  open: boolean
  handleClose: () => void
  title?: string
  contents?: string[]
}

const ContentPhaseModal: React.FC<ContentPhaseModalProps> = ({
  open,
  handleClose,
  title,
  contents,
}) => {
  return (
    <Modal
      centered
      opened={open}
      onClose={handleClose}
      sx={() => ({
        size: '50%',
        '@media (max-width: 755px)': {
          size: '90%',
        },
      })}
      withCloseButton={false}
      padding={0}
      className="items-center"
    >
      <div className="relative h-full w-full bg-white shadow dark:bg-gray-700 md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-none dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-6 p-6 pl-10">
            <ul className="list-outside list-disc marker:text-gray-500 dark:marker:text-gray-400">
              {contents?.map?.((content, index) => (
                <li key={index}>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ContentPhaseModal
