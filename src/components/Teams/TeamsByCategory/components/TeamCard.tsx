import Image from 'next/image'
import React, { useState } from 'react'
import { TeamMember } from '../../../../types/TeamMember'
import { FadeInWhenVisible } from '../../../shared/FadeInWhenVisible'
import { TeamSocialIcon } from '../../TeamSocialIcon'


type Props = {}

const TeamCard = ({teamMember,i}:any) => {
    const [buttoClicked, setButtoClicked] = useState(false)
  return (
    <FadeInWhenVisible duration={(i + 1) * 0.2} key={teamMember.id}>
              <div
                id={teamMember.id}
                className="my-5 mx-5 bg-white dark:bg-light-grey md:mx-auto md:w-2/3 md:-skew-x-12"
              >
                <div className="grid items-center gap-5 overflow-hidden px-10 py-5 md:skew-x-12 md:grid-cols-4">
                  {/* Image Starts */}
                  <div className="relative mx-auto h-28 w-28 sm:h-40 sm:w-40 md:col-span-1">
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      layout="fill"
                      className="rounded-full bg-light-grey dark:bg-light"
                    />
                  </div>
                  {/* Image Ends */}

                  <div className="container col-span-3 pt-3">
                    <div>
                      <h4 className="text-xl font-semibold">
                        {teamMember.name}
                      </h4>
                      <h6 className="font-medium">{teamMember.title}</h6>
                    </div>

                    {buttoClicked ? (
                      <div>
                        <p className="py-2 text-sm">
                          {teamMember.longDescription}
                        </p>
                      </div>
                    ) : null}
                    <div className="flex justify-between">
                      <div>
                      <button
                        onClick={() => {
                          setButtoClicked(!buttoClicked)
                        }}
                        className={`group relative mt-4  mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800`}
                      >
                        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                          {buttoClicked ? 'Hide' : 'See Details'}
                        </span>
                      </button>
                      </div>
                      <div> {
                        buttoClicked? <TeamSocialIcon teamMember={teamMember} />:null
                      }</div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
  )
}

export default TeamCard