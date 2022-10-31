import { ReactNode } from 'react'
import { FadeInWhenVisible } from '../FadeInWhenVisible'
import { Title } from '../Title'
import { FaqPanel } from './FaqPanel/index'

interface FaqSectionProps {
  children?: ReactNode
}

const FAQS = [
  {
    id: 1,
    title: 'What is Trigan?',
    content:
      'Trigan is a tech startup/registered company based in Scotland. We believe that blockchain technology has incredible potential but has seen little real advancement since the advent of smart contracts. With the correct application or use case, blockchain technology has the potential to radically change the way we live. This is our space. </br> In short, we aim to provide people with better, fairer ways to live and the technology enabling this.',
  },
  {
    id: 2,
    title: 'What projects are Trigan working on?',
    content:
      'As a Web3 tech startup, we’re primarily tech driven and led. Our ideas began on a big whiteboard, covering our new layer 1 blockchain implementation. Our blockchain needs to have blazingly fast transactions yet with extreme safety, plus be resource frugal and built with greatly enhanced utility than existing solutions. These factors are vital to the success of our key technology which will enable our Virtual and Physical Smartest Cities, TriganDAO. <br> TriganDAO has been designed to facilitate our vision of Utopia. While there are some similarities, we have a radically different interpretation of DAO as a concept, which will become more apparent as development progresses. We will create our metaverse, which will be our first universal virtual living experience on our platform, privacy-concious / appropriate NFT based citizenship and passport, and the creation of our first real-world physical Smart City; all running on our DAO and very own layer 1 blockchain. <br>' +
      '<span class="block py-2 mt-2 ml-2"> • We will implement the first wide-scale application of UBI, for all citizens. </span>' +
      '<span class="block py-2 ml-2"> • We will enable NFT based Freedom of Movement between our communities in the real world. </span>' +
      '<span class="block py-2 ml-2"> • We will provide a new, enhanced Social Healthcare System - we believe that healthcare should be free for all. </span>' +
      '<span class="block py-2 ml-2"> • Faster, smarter blockchain based payments. </span>',
  },
  {
    id: 3,
    title: 'Why should you choose us?',
    content:
      "We're comprehensively doxxed and more of a hybrid technology startup than a pure crypto project. This means that we will not be running away with peoples' money - no rug pulls here! <br> There is currently no other project or projects on the horizon with such lofty aims or ambitions. We're bringing real ambition and change through our interpretation and usage of blockchain technology. We believe that there are cycles of technology in the modern world - the advent of the personal computer, the internet, Web 2.0 and what is now called Web 3.0. <br> No-one knows what the outcome will be in advance, but great fortunes can be made during these cycles if you invest wisely. We have our own unique utility and use cases, which should help to ensure a very bright future for us all.",
  },
  {
    id: 4,
    title:
      'Is there anything extra you can show to potential investors right now?',
    content:
      'We are in the midst of completing a slightly heavy ‘Lite’ Paper. However, in the meantime, you are able to get more information through our official website https://trigan.org as well as interact with the team and community in our discord / telegram etc social channels to get to know us better!',
  },
  {
    id: 5,
    title: 'How can I invest?',
    content:
      "We are going to run a migratory presale process. This means that we will have ERC-20 based tokens, BEP-20 based tokens available for sale at presale prices. We will also accept fiat payment for SAFT style IOU's through our website. Once this process has completed, we will list the tokens on Uniswap and Pancakeswap respectively. Each will be exchangeable on a 1:1 basis for our coins, once development on our layer 1 blockchain has reached that point. <br> We will also sell migratory ERC-721 based collectible NFT certificates, which will entitle the owner to convert this to our Citizenship Passport, when that facility is ready.",
  },
  {
    id: 6,
    title: 'What are the specifics of the tokens? How will MC be set?',
    content:
      'We expect to have an initial total supply of 1.5billion, split between the 3 routes. However, unsold tokens etc not pre-allocated for liquidity or modestly for the team, will be burned prior to DEX listings. This means that the market cap will be adjusted based on initial demand. <br> It will be simple and with low tax. The total supply will be 1.5B, split 3 ways, then burn the remainder of unsold tokens; minus liquidity and team wallets.',
  },
  {
    id: 7,
    title: 'How is the roadmap? Is everything going to schedule?',
    content:
      'We have a strong team, which has been constantly growing since we started a few weeks ago. Our team stands at 15 people as of writing. We’re all working towards the implementation of our presale schedule, which is due to take place next month. <br> I have never before been involved in a startup or project with such a powerful idea behind it. All of the team, including our 7 software engineers, are working based on trust, with no expectations until after our presale. No-one has declined to get involved because everyone finds the concept so exciting. <br> We are still on track as per our roadmap timeline, which you can find at https://trigan.org',
  },
]

export const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
    <section id="faq" className=" mt-8 bg-[#f0f0f0]">
      <div className="py-5">
        <Title classes="border-none " title="Frequently Asked Questions" />
      </div>

      <div className="max-w-5xl pb-5 mx-auto">
        <FadeInWhenVisible>
          {FAQS.map((faq, index) => {
            return (
              <FaqPanel
                index={index}
                title={faq.title}
                content={faq.content}
                key={faq.id}
              />
            )
          })}
        </FadeInWhenVisible>
      </div>
    </section>
  )
}