import React from 'react'

const callouts = [
  {
    date: 'JULY 4, 2016',
    name: 'Concept design of Trigan Metaverse has begun!',
    imageSrc:
      'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fc4536e470d71277705b_triganconcept-03.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
    href: '#',
  },
  {
    date: 'JULY 4, 2016',
    name: ' Our team is growing day by day',
    imageSrc:
      'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fd423eba995c7f94c92f_Image3.png',
    imageAlt: '.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
    href: '#',
  },
  {
    date: 'JULY 4, 2016',
    name: '  How to show and hide content with Webflow click interactions',
    imageSrc:
      'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b42d69bf74cfabd920f5da_Photo-5.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
    href: '#',
  },
]

export const Cardsmall = () => {
  return (
    <>
      <div className="mt-6 mb-20 gap-x-10 space-y-12 pb-12  lg:grid lg:grid-cols-3 lg:space-y-6">
        {callouts.map((callout) => (
          <div
            key={callout.name}
            className="h-90  m-auto w-96 cursor-pointer  overflow-hidden rounded-sm"
          >
            {/* a  */}
            <a href={callout.href}>
              <div className="block h-full w-full  overflow-hidden">
                <div className="  hover:bg-[#531fff]">
                  <img
                    loading='lazy'
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="max-h-40  w-full object-cover hover:opacity-70"
                  />
                </div>
                <div className="w-full bg-white px-1 py-3 dark:bg-gray-800">
                  {/* //create date here */}
                  <div className=" mb-2 text-sm uppercase text-[#bdbdbd]">
                    {callout.date}
                  </div>
                  <p className=" mb-4 block text-base font-medium text-[#5e1fff] hover:text-black">
                    {/* Concept design of Trigan Metaverse has begun! */}
                    {callout.name}
                  </p>

                  <p className=" text-sm text-black dark:text-gray-300 ">
                    {callout.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
