
const TokensLeaderSection = () => {
  return (
    <section className="relative ">

      <img
        loading='lazy'
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full "
        src="https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b47c03d5dbdefc838d83bf_trigan%20concept%202%20copy.jpg"
        alt="Couple on a bed with a dog"
      />

      <div className=" block inset-0 absolute bg-gradient-to-b from-white to-[#e4e4e4] opacity-90  z-0"></div>

      <div className="relative px-4 py-28 mx-auto max-w-screen-xl lg:h-auto text-center  lg:items-center lg:flex">
        <div className=" text-center flex flex-col w-full justify-center items-center ">

          {/* head text */}
          <div className=' pb-10 text-dark text-xl text-center'>
            <strong className='font-bold'>A Word from our founder</strong>
          </div>

          <div
            className=" md:max-w-4xl pb-10  leading-relaxed  font-light sm:font-medium px-3   text-[#3b3b3b]  text-xl">

            The current market seems to ‘bear’ (sorry!) out our concerns about PoS. Basing a financial system’s ultimate trust on whoever has the most money seems insane.
            Building other systems on top of that even crazier.
            Add leveraged trading to crazy money and you get something like a crypto bomb. <br />
            <br />We’re very different in design, architecture, solution and soul. <br />
            <br />PoW feels like it came from someone with heart. It was deeply flawed (wasteful, ability to throw money at hardware to win at mining)
            but tried to be fair. PoS feels like the old corrupt national currencies but without the trust gained via a backing country’s reputation. Hardly future money.
            <br /><br />Last October I was in front of a big electro-mechanical whiteboard figuring out why I hated existing consensus mechanisms so much and came up with
            the earliest version of the platform solution we have today. From the beginning of this year until today we’ve gone from a team of 1 to a team of over 30.
            As a pre-revenue and pre-funding startup, we are all working purely on belief in our shared dream and vision for Trigan and the Trigan Nation.
            &nbsp;We have a well reasoned approach to a radically different blockchain technology which actually facilitates a true liquid democracy.
            It won’t just be fair, it will help people in real-world communities anywhere to live better - this is blockchain for the people and not the few.
            <br /><br />The first urban blockchain is the static foundation of our solution. It will grow sideways and be the backbone of our human economy. <br /><br />
            It will be FaF, reliable and secure, using our novel real-world-relevant approach to consensus. &nbsp;
            <br /><br />The technologies built on top of this enable everything else. We have an evolutionary amalgamation of the best bits of human and machine decision-making built
            to be able to spread anywhere in the world with just a few clicks. An actual caring system designed to compete to protect to protect and enable its community to succeed. We want to build cities - everyone has their own view of utopia and we would love to show you ours, but we also want to enable any city
            (or community, from a building or a remote village to a travelling community or even a refugee camp!) to be better for the people who live in it.
            <br /><br />
            <strong className='pb-10 text-dark text-2xl text-center font-bold'>We will be releasing some papers regarding our solution shortly. </strong><br /><br />-- <strong className='text-dark text-xl text-center font-bold'><em>Aaron S, </em></strong>
            <em>CEO &amp; CTO<br /></em><a className='text-primary hover:text-black underline' href="https://trigan.org/"><em>Trigan</em></a>

          </div>




        </div>
      </div>
    </section>
  );
}

export default TokensLeaderSection;