import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa'

const teams = [
  {
    job: "CEO / CTO",
    name: "Aaron SarginSon",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183218d5e6f542a017_Aaron.png",
    imageAlt: "Aaron SarginSon.",
    description:
      "Aaron is a technologist, believing that technology can solve many of the problems affecting humanity today. An innovator with a keen interest in building as big as he talks, Aaron is the conceptual founder and main driving force behind Trigan and the Smartest City project. He has a Computer Science degree and experience in software and hardware architecture, embedded systems design, programming, project management, business leadership, web development, network administration and systems administration.",
    socials: [
      { facebook: "https://www.facebook.com/Aaron.Thomas.Sarginson" },
      { linkedin: "https://www.linkedin.com/in/aaronsarginson" }
    ],
  },
  {
    job: "CMO",
    name: "Farooq Chisty",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183eba99e9d7956011_Farooq.png",
    imageAlt: "Farooq Chisty.",
    description:
      "Farooq is a growth marketer with 7+ years of entrepreneurial and marketing experience in commerce, blockchain, ed-tech, DeFi, fintech and SaaS.He has managed Marketing budgets of over $10 million in the past 5 years. While leading marketing at a fintech company Farooq generated more than $80 million in revenue within 2 years. Built a web3 game-fi project called solgames.fun and won Solana India hackathon under NFT P2E category 2021 for solgames.fun, an NFT gaming marketplace. He has worked as a web3 marketing consultant for Midas Capital, PENX DAO, Hobblyns NFTs, Superteam DAO, Quadra, Questbook and more.",
    socials: [
      { facebook: "" },
      { linkedin: "" }
    ],
  },
  {
    job: "CSO",
    name: "Oscar Sanz-Paris",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b5101836e4705c8d77ffd3_Oscar.png",
    imageAlt: "Oscar Sanz-Paris",
    description:
      "Oscar brings over two decades of experience in banking, capital markets and finance to Trigan. His current efforts are focused on ESG investments - social impact in particular, and DeFi. He is based between Washington D.C. and London. He has held board positions in multinational companies, is founder of Castille Capital Global Markets, an alternative asset manager, and is a senior associate research fellow for the digital economy at Globec, a European think tank.",
    socials: [
      { facebook: "" },
      { linkedin: "" }
    ],
  },
  {
    job: "COO",
    name: "Dr. Gunel Sarginson",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b51018ed3ca312442ebb44_Gunel.png",
    imageAlt: "Dr. Gunel Sarginson",
    description:
      "Gunel is very interested in the application of technology to solve health and wellbeing issues. A Medical Doctor (Paediatrician), she also holds a second degree in Health and Social Policy. Gunel has a wide, varied background in sales / marketing and management at major corporations in multiple countries, including the UK. Additionally, she has held board positions previously and has strong entrepreneurial experience. Gunel is extremely excited about top tier blockchain related projects (especially Trigan!) and is fully fluent in 5 languages.",
    socials: [
      { facebook: "https://www.facebook.com/GunelSarginson" },
      { linkedin: "https://www.linkedin.com/in/gunelsarginson" }
    ],
  },
];

const AboutComponent = () => {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="flex bg-aboutSection bg-cover bg-no-repeat flex-col items-center justify-center text-center global-container">
          <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-sky-500 tracking-wide text-5xl md:text-6xl lg:text-7xl 2xl:py-5">
            LEADERSHIP
          </h1>
          <h2 className="w-full px-12 mt-5 mb-10 text-slate-200 text-xl lg:w-1/2">
            A team with a wide sector experience from finance, development,
            medicine, and innovation with a passion for change.
          </h2>
        </div>

        {/* TEAM CARD SECTION */}
        <div className="mb-10 ">
          {teams.map((team) => (
            //  < !--container for all cards -->
            <div
              key={team.name}
              className="container w-100 lg:w-4/5 mx-auto flex flex-col "
            >
              {/* <!-- card -->  */}
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2 bg-gradient-to-br from-white to-slate-200">
                {/* <!-- media --> */}
                <div className="h-64 flex justify-center my-5 w-auto md:w-1/2">
                  <img
                    className="lg:rounded-full"
                    src={team.imageSrc}
                    alt={team.imageAlt}
                  />
                </div>
                {/* <!-- content --> */}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="pb-0 text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-rose-500 font-semibold text-lg leading-tight truncate">
                    {team.name}
                  </h3>
                  <p className="text-base text-gray-500">{team.job}</p>
                  <p className="mt-2">{team.description}</p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    {/* {{ card.author }} &bull; {{ card.date }} */}
                  </p>
                  <div className="relative flex space-x-5">
                    {team.socials?.map((social, index) => (
                      <div key={index} >
                        {social.facebook ? <a href={social.facebook} >
                          <FaFacebookSquare className="text-2xl text-sky-700" />
                        </a> : null}
                        {social.linkedin ? <a href={social.linkedin}>
                          <FaLinkedin className="text-2xl text-sky-800" />
                        </a> : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
