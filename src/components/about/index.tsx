import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa'

const teams = [
  {
    job: "Chief Executive Officer & Chief Technology Officer",
    name: "Aaron Sarginson",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183218d5e6f542a017_Aaron.png",
    imageAlt: "Aaron Sarginson.",
    description:
      "Aaron is a technologist, believing that technology can solve many of the problems affecting humanity today. An innovator with a keen interest in building as big as he talks, Aaron is the conceptual founder and main driving force behind Trigan and the Smartest City project. He has a Computer Science degree and experience in software and hardware architecture, embedded systems design, programming, project management, business leadership, web development, network administration and systems administration.",
    socials: [
      { facebook: "https://www.facebook.com/Aaron.Thomas.Sarginson" },
      { linkedin: "https://www.linkedin.com/in/aaronsarginson" }
    ],
  },
  {
    job: "Chief Creative Officer",
    name: "Aydın Özön",
    imageSrc:
      "https://i.ibb.co/hKGW9Bb/Aydin.png",
    imageAlt: "Aydın Özön",
    description:
      "Aydın is a multi disciplinary graphic designer and artist. He has a BA degree in Graphics Design in the Faculty of Fine Arts and also an MA degree in Communication Sciences and Communication Arts. He has given lectures in several Universities on graphic design, visual communication, interaction design (web, app, UI) in Turkey. He founded one of the first digital agencies in Turkey in 2001 where he achieved a wide spectrum of design projects covering branding, online and offline campaigns, digital marketing, game design & development, web sites and apps, photo and video production, 3D/2D illustration and more.",
    socials: [
      { facebook: "" },
      { linkedin: "https://www.linkedin.com/in/aydinozon/" }
    ],
  },
  {
    job: "COO",
    name: "Dr. Gunel Sarginson",
    imageSrc:
      "https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b51018ed3ca312442ebb44_Gunel.png",
    imageAlt: "Dr. Gunel Sarginson",
    description:
      "Gunel is very interested in how our solution can help solve social and medical challenges faced by communities today. While she is a Medical Doctor and Social Scientist, she also has a wide and varied background in marketing and brand leadership at major corporations in multiple countries, including the UK. Gunel has held related board positions which she has given up for Trigan and has undertaken Public Health research for the NHS. She has strong entrepreneurial experience in multiple sectors. Gunel is extremely excited about our vision at Trigan and how we can truly change the world for the better.",
    socials: [
      { facebook: "" },
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
