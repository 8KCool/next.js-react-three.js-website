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
    job: "Chief Operating Officer",
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

      <section className="overflow-hidden bg-transparent">
      <div className=" text-white pb-2 text-5xl font-semibold text-center title">
<h1>Leadership</h1></div>
        {/* TEAM CARD SECTION */}
        <div className="my-[4%] ">
          {teams.map((team) => (
            //  < !--container for all cards -->
            <div
              key={team.name}
              className="container w-50 lg:w-4/5 mx-auto flex flex-col "
            >
              {/* <!-- card -->  */}
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-50 mx-2 bg-gradient-to-br from-white to-slate-200">
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
                  <h3 className="pb-0 text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-rose-500 font-m_plus_rounded_1c font-semibold text-lg leading-tight truncate">
                    {team.name}
                  </h3>
                  <p className="text-base font-m_plus_rounded_1c text-black">{team.job}</p>
                  <p className="mt-2 text-gray-600 font-m_plus_rounded_1c">{team.description}</p>
                  <p className="text-sm text-gray-700 font-m_plus_rounded_1c uppercase tracking-wide font-semibold mt-2">
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
