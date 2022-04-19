import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import { Title } from '../../shared/Title'

interface ProjectSectionProps {
  children?: ReactNode
}

const PROJECTS = [
  {
    id: 1,
    name: 'New life',
    description: `Lead the life you deserve.`,
    content:
      'We have designed and will implement our first practical, real-world utopia: The Smartest City. “Your city will welcome you for who you are, what you are and who you will be.” In addition to our physical Smartest City, we will also create our virtual living experience: The Smartest Metaverse',
    img: '/images/ICO.svg',
  },
  {
    id: 2,
    name: 'Blockchain',
    description: `The Blockchain`,
    content:
      'We have designed and are developing our own layer 1 blockchain. The Trigan blockchain is intended to address the major issues which plague  current blockchain solutions. Our blockchain will be safer, faster and with far  greater utility than existing blockchains, yet will also be fully decentralised. For instance, we in Team Trigan have found ourselves forced to pay with our  cryptocurrencies many times, when absolutely necessary. The process has  never been an enjoyable, let alone stress-free one. It shouldn’t be necessary to  have to wait unreasonable amounts of time for a payment to be confirmed. This  should be achievable in much the same time, or less, that a Visa or Mastercard  payment takes to complete. Circumstances have made the necessity of sending  a ‘test’ payment prior to committing to completing a full, final transaction,  sensible. Then imagine if we were to send Ethereum, or an Eth based token…  Without careful planning and a lot of luck, the gas fees could very well cost  more than whatever it is you are paying for. This would be an expensive loaf of  bread! We find these situations unrealistic and unworkable for everyday transactional  use and have worked hard to solve them. Our blockchain utilises a modified Proof of Space and Time consensus  mechanism, ensuring that Trigan Blockchain is considerably more eco-friendly  than Proof of Work based blockchains like Bitcoin. Other innovations will allow  us to compete on a more level footing with Proof of Stake based blockchains on  the matter of speed, yet without the potential reliability or security weaknesses  inherent in the PoS consensus mechanism. We will also have no gas fees!',
    img: '/images/coins.svg',
  },
  {
    id: 3,
    name: 'DAO',
    description: `DAO`,
    content:
      'Our DAO (Decentralised Autonomous Organisation) is as revolutionary as it is unique. It’s purpose goes far beyond that of previous DAO implementations. It will have responsibility for all facets of our economy and government. Our DAO never sleeps, is always fair and cannot be corrupted',
    img: '/images/project_dao.svg',
  },
  {
    id: 4,
    name: 'Free Cash Economy',
    description: 'Free money for all',
    content:
      'Universal Basic Income: We believe that our UBI is the first practical real-world solution of its kind. : UBI is a concept where everyone receives free income on a regular basis, : regardless of any other income or their personal status. This is very : different to social care implementations as found in many Western : European countries, which are means tested with hard thresholds often : incompatible with the real world. QUOTES: In other words, we will provide free money to all of our Citizens, fairly and : with no strings attached',
    img: '/images/money.svg',
  },
  {
    id: 5,
    name: 'The Smartest City',
    description: 'The caring city, from the brick upwards.',
    content:
      'Our City will be designed from the ground up for its Citizens. It will take care of you and help you to reach your full potential, while living life the way you dream of. You will have a say in all important decisions affecting you and others living in the Smartest City.The way we live today has not changed so much from how our ancestors have lived since the Industrial Revolution. We believe that there are better or alternative ways to live, work or socialise, and we want to find them together with you',
    img: '/images/city.svg',
  },
  {
    id: 6,
    name: 'The Smartest Metaverse',
    description: `Beyond Metaverse`,
    content:
      'Imagine a virtual world where you can live, work or socialise; connected with and enhancing the real world. This is our vision for our virtual living experience, which will bring the real world into the virtual, and the virtual world into the real… beyond Metaverse.We also intend to address the primary Metaverse issue, and therefore have plans in place to enable your digital avatar to cross between different virtual experiences on the Trigan Blockchain',
    img: '/images/concepts.svg',
  },
  // {
  //   name: 'Trigan Coin',
  //   description: `The coin of our blockchain, city and metaverse`,
  //   content:
  //       'Trigan coin is intended to be used rather than simply collected. This is one of the many reasons why we decided against the Proof of Stake consensus protocol. To this end, we are engineering our payment processes to be more compatible with real life living. Making a payment should be easy, fast and just as importantly, safe.While we have a finite supply of mineable coins, we have also developed a solution to the future issue of continued block mining when mining incentives should stop, while still maintaining scarcity (without switching to PoS or anything drastic like that).',
  // },import { Image } from 'next/image';
]

export const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <section id="project" className="pb-5">
      <Title title="Project" />
      <button
        className="primary-btn my-2 md:my-5"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : 'Learn More'}
      </button>
      <div className="grid grid-cols-1 gap-5 pb-5 md:grid-cols-2 md:px-5 lg:grid-cols-3">
        {PROJECTS.map((project, i) => {
          return (
            <FadeInWhenVisible duration={i * 0.5} key={project.id}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-2xl bg-light-grey text-justify"
              >
                <div className="cursor-pointer rounded-lg p-5">
                  <div className="relative my-2 h-12 w-12">
                    <Image
                      className="filter-primary hover:filter-light-gray"
                      src={project.img}
                      alt={project.name}
                      layout="fill"
                    />
                  </div>

                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <h6 className="">{project.description}</h6>

                  <p
                    className={`pt-2 transition duration-300 ${
                      showMore ? 'line-clamp-none' : 'line-clamp-4'
                    }`}
                  >
                    {project.content}
                  </p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          )
        })}
      </div>
    </section>
  )
}
