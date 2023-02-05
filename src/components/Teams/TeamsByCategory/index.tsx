// import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { TeamMember } from '../../../types/TeamMember'
// import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
// import { TeamSocialIcon } from '../TeamSocialIcon'
import TeamCard from './components/TeamCard'
import Modal from 'react-modal'
import { TeamSocialIcon } from '../TeamSocialIcon'
import { IoCloseCircle } from 'react-icons/io5'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('#app')
interface TeamsByCategoryProps {
  children?: ReactNode
  category: string
  teams: TeamMember[]
}

export const TeamsByCategory: React.FC<TeamsByCategoryProps> = ({
  category,
  teams,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const handleShowDetails = (memeber: TeamMember | null) => {
    setSelectedMember(memeber)
  }
  return (
    <div className="flex w-full flex-col items-center">
      {category === 'all' ? (
        <>
          <p className="my-6 text-center text-3xl font-semibold text-white">
            LEADERSHIP
          </p>
          <div className="grid max-w-[950px] gap-4 pt-8 sm:grid-cols-2 md:px-12">
            {teams
              .filter((team) => team.category === 'Leadership')
              .map((teamMember, i) => (
                <TeamCard
                  handleShowDetails={handleShowDetails}
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="my-6 text-center text-3xl font-semibold text-white">
            ADVISORS
          </p>
          <div className="grid grid-cols-1 justify-between gap-4 pt-8 md:grid-cols-2 md:px-2  2xl:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Advisors')
              .map((teamMember, i) => (
                <TeamCard
                  handleShowDetails={handleShowDetails}
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="my-6 text-center text-3xl font-semibold text-white">
            TECH
          </p>
          <div className="grid max-w-[1300px] grid-cols-1 gap-4 pt-8 sm:grid-cols-2  md:grid-cols-2 2xl:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Tech')
              .map((teamMember, i) => (
                <TeamCard
                  handleShowDetails={handleShowDetails}
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>

          <p className="my-6 text-center text-3xl font-semibold text-white">
            MARKETING
          </p>
          <div className="mb-6 grid max-w-[1300px] grid-cols-1 gap-4 pt-8 sm:grid-cols-2  md:grid-cols-2 md:px-2 2xl:grid-cols-3">
            {teams
              .filter((team) => team.category === 'Marketing')
              .map((teamMember, i) => (
                <TeamCard
                  handleShowDetails={handleShowDetails}
                  key={teamMember.id}
                  teamMember={teamMember}
                  idx={i}
                  showDetails={false}
                ></TeamCard>
              ))}
          </div>
        </>
      ) : (
        <div className="my-6 flex flex-wrap  justify-center gap-4">
          {teams.map((teamMember, i) => {
            // I'm not sure which teamMembers are leaders so I'll just leave this false
            return (
              <TeamCard
                handleShowDetails={handleShowDetails}
                key={teamMember.id}
                teamMember={teamMember}
                idx={i}
                showDetails={false}
              ></TeamCard>
            )
          })}
        </div>
      )}
      <Modal
        isOpen={!!selectedMember}
        onRequestClose={() => handleShowDetails(null)}
        style={{
          ...customStyles,
          content: {
            border: 'none',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          },
          overlay: {
            background: 'rgb(0,0, 0, 0.3)',
          },
        }}
      >
        {selectedMember && (
          <div className="flex max-w-[100%] items-center justify-center md:max-w-[50%]">
            <div className="relative ">
              <div
                className="absolute top-[0.5rem] right-[0.5rem] z-10 cursor-pointer text-red-600"
                onClick={() => handleShowDetails(null)}
              >
                <IoCloseCircle size={22} />
              </div>
              <div className="flex  items-center overflow-hidden rounded-lg border-[1px] px-4 bg-blend-multiply backdrop-blur backdrop-filter">
                <div className="flex flex-col items-center gap-2 pt-[1.5rem]">
                  <img
                    // loading='lazy'
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="rounded-full  p-0"
                    height={'100px'}
                    width={'100px'}
                  />
                  <div>
                    <div className="box-border flex   flex-col  gap-2   p-2 font-m_plus_rounded_1c  ">
                      <div>
                        <div className="flex justify-between">
                          <p className="pr-8 text-2xl font-semibold text-zinc-100">
                            {selectedMember?.name}
                          </p>

                          <TeamSocialIcon teamMember={selectedMember} />
                        </div>

                        <div className="my-2 mb-2">
                          <p className="mb-2 whitespace-pre text-base font-semibold leading-tight text-[#A855F7] lg:text-lg">
                            {selectedMember?.title}
                          </p>
                          <p className="pt-2 text-zinc-100">
                            {selectedMember?.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
