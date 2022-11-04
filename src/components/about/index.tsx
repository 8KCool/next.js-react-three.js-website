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
    href: "#",
  },
  {
    job: "CSO",
    name: "Oscar Sanz-Paris",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b5101836e4705c8d77ffd3_Oscar.png",
    imageAlt: "Oscar Sanz-Paris",
    description:
      "Oscar brings over two decades of experience in banking, capital markets and finance to Trigan. His current efforts are focused on ESG investments - social impact in particular, and DeFi. He is based between Washington D.C. and London. He has held board positions in multinational companies, is founder of Castille Capital Global Markets, an alternative asset manager, and is a senior associate research fellow for the digital economy at Globec, a European think tank.",
    href: "#",
  },
  {
    job: "COO",
    name: "Dr. Gunel Sarginson",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b51018ed3ca312442ebb44_Gunel.png",
    imageAlt: "Dr. Gunel Sarginson",
    description:
      "Gunel is very interested in the application of technology to solve health and wellbeing issues. A Medical Doctor (Paediatrician), she also holds a second degree in Health and Social Policy. Gunel has a wide, varied background in sales / marketing and management at major corporations in multiple countries, including the UK. Additionally, she has held board positions previously and has strong entrepreneurial experience. Gunel is extremely excited about top tier blockchain related projects (especially Trigan!) and is fully fluent in 5 languages.",
    href: "#",
  },
];

const AboutComponent = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="flex flex-col items-center justify-center text-center global-container">
        <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-sky-500 tracking-wide text-5xl md:text-4xl lg:text-5xl 2xl:py-5">
          LEADERSHIP
        </h1>
        <h2 className="w-full px-12 mt-5 mb-10 text-gray-800 lg:w-1/2">
          A team with a wide sector experience from finance, development,
          medicine, and innovation with a passion for change.
        </h2>
      </div>

      {/* TEAM CARD SECTION */}
      <div className="mb-10">
        {teams.map((team) => (
          //  < !--container for all cards -->
          <div
            key={team.name}
            className="container w-100 lg:w-4/5 mx-auto flex flex-col"
          >
            {/* <!-- card --> */}
            <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
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

                  {/* <a href="#_" className="text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#_" className="text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mx-auto grid max-w-6xl grid-cols-2 py-5 lg:grid-cols-4 gap-8">
        {teams.map((team) => (
          <div
            key={team.name}
            className="shadow-xl rounded-xl my-10 flex-1"
          >
            <div className="flex justify-center my-5">
              <img
                className="rounded-full "
                width={"50%"}
                height={"100%"}
                src={team.imageSrc}
                alt={team.name}
              />
            </div>
            <div className="p-3">
              <h3 className="text-lg text-center font-medium pb-3 text-purple-500">
                {team.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="relative px-16 mx-auto max-w-7xl">
        <div className="grid w-full grid-cols-2 gap-10 sm:gr id-cols-3 lg:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className="flex flex-col items-center justify-center col-span-1"
            >
              <div className="flex flex-col p-5 ">
                <div className="w-full h-full -mt-5 -ml-5 rounded-full  bg-blue-50"></div>
                <img
                  loading='lazy'
                  className="w-full rounded-full "
                  src={team.imageSrc}
                  alt={team.imageAlt}
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>{team.name}</h3>
                  <p className="text-blue-600">{team.job}</p>
                  <p className="box-border flex text-sm leading-6 text-center text-gray-500 lg:text-left">
                    {' '}
                    {team.description}{' '}
                  </p>
                </div>
                <div className="relative flex items-center justify-center space-x-3">
                  <a href="#_" className="text-gray-300 hover:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#_" className="text-gray-300 hover:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default AboutComponent;
