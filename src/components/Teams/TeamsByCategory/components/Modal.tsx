import { TeamMember } from '../../../../types/TeamMember'
import React, { useEffect } from 'react'

type ModalProps = {
  showModal: boolean
  setShowModal: any
  teamMember: TeamMember
}

const Modal: React.FC<ModalProps> = ({
  showModal: isShowing,
  setShowModal: setIsShowing,
  teamMember,
}) => {
  useEffect(() => {
    isShowing
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [isShowing])

  return (
    <div>
      {isShowing ? (
        <>
          <div
            className={`${
              isShowing ? 'fixed' : 'hidden'
            } top-0 left-0 right-0 z-50 h-screen bg-zinc-900 opacity-80`}
          />
          <div
            className={`${
              isShowing ? 'fixed' : 'hidden'
            } top-0 left-0 right-0 z-50 flex h-screen items-center justify-center`}
          >
            <div className="relative m-0 h-screen w-full bg-light-grey p-8 text-zinc-200 md:h-fit md:max-w-[700px]">
              <div className="flex flex-col gap-2 md:flex-row md:gap-8">
                <div className="flex-none">
                  <div className="flex justify-center">
                    <img
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="w-40 h-40 p-2 bg-gray-700 bg-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold md:text-3xl">
                    {teamMember.name}
                  </p>
                  <p className="my-2 text-lg italic md:my-4">
                    {teamMember.title}
                  </p>
                  <p className="overflow-y-auto text-normal max-h-60 md:text-lg">
                    {teamMember.longDescription}
                  </p>
                </div>
              </div>

              <button
                className="absolute -top-0 -right-0 border border-gray-600 bg-gray-800 p-0.5 hover:bg-gray-700 md:-top-2 md:-right-2"
                onClick={() => setIsShowing(false)}
              >
                <img src="/icons/ic_close.svg" alt="Close" />
              </button>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Modal
