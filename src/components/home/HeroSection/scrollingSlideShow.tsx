import React, {
  useEffect,
  createRef,
  useRef,
  useState,
  useLayoutEffect,
} from 'react'
import ScrollingSlideShowElement from './scrollingSlideShowElement'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import HorizontalSlider from './HorizontalSlider'

const ScrollingSlideShow = () => {
  // for initialization of AOS
  useEffect(() => {
    AOS.init({ offset: 150 })
  })
  const cards = [
    {
      id: 1,
      headerText: 'The Urban Blockchain',
      mainText: `Trigan’s unique blockchain technology enables a fair,
                transparent, and decentralised new economy for the benefit of
                everyone, everywhere.`,
    },
    {
      id: 2,
      headerText: 'Urban Communities',
      mainText: `The smart city operating system for real-world communities,
        improving quality of life in towns and cities on Earth.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 3,
      headerText: 'Digital Twinning',
      mainText: `A revolutionary local community-centric approach to medicine,
      workplace, education and social interaction.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
    {
      id: 4,
      headerText: 'City Infrastructure',
      mainText: `Positive, fair solutions to poverty, corruption, inequality and
      deprivation using science and AI.`,

      buttons: [
        { text: 'Healthcare' },
        { text: 'Workplace' },
        { text: 'Education' },
        { text: 'Social' },
      ],
    },
    {
      id: 5,
      headerText: 'Trigan',
      mainText: `Empowering you with the equal opportunity to succeed, regardless
      of your background.`,
      buttons: [{ text: 'Lorem ipsum' }],
    },
  ]

  const [centered, setCentered] = useState<number>()

  const elementsRef = useRef<any>(cards.map(() => createRef()))

  useEffect(() => {
    const highlightElements = () => {
      {
        const distances: number[] = []
        cards.forEach((_, i) => {
          distances[i] =
            (elementsRef.current[i].current.getBoundingClientRect()
              .top as number) +
            elementsRef.current[i].current.getBoundingClientRect().height / 2 -
            window.screen.height / 2
        })
        // console.log(distances)

        let distance = Number.POSITIVE_INFINITY

        let closest = 0
        for (let i = 0; i < distances.length; i++) {
          // console.log('For ' + i)
          if (Math.abs(distances[i]) < distance) {
            closest = i
            distance = Math.abs(distances[i])
          }
        }
        setCentered(closest)
      }
    }
    window.addEventListener('scroll', highlightElements)
    // console.log(viewport)

    return () => window.removeEventListener('scroll', highlightElements)
  }, [])

  useEffect(() => {
    if (cards.length % 2 !== 0) {
      const lastChildCard: any = document.getElementById('cards')?.lastChild
      lastChildCard.classList.add(
        'lg:col-span-2',
        'lg:w-2/4',
        'lg:mx-auto',
        'lg:mt-5'
      )
      lastChildCard.classList.remove('mx-4')
    }
  })

  return (
    <div
      className="relative mt-[1600px] flex w-full flex-col items-center gap-20 py-40 "
      id="cards"
    >
      <section id="about" className="w-full px-5">
        <FadeInWhenVisible>
          <div>
            {/* Video Starts */}
            <div className="aspect-h-9 aspect-w-16  flex w-full justify-center opacity-100 first-line:relative ">
              {/* <AnimationBlob /> */}
              <div className="mx-auto h-3/4 w-3/4 shadow-xl shadow-black">
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="h-full w-full object-cover"
                  src="https://www.youtube.com/embed/VY-QKe19p0Y?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
                />
              </div>
            </div>
            {/* /* Video Ends */}
            <div className="mx-auto mb-36 max-w-4xl py-5 text-center font-extralight text-slate-100">
              {/*} <h2 className="relative mt-20 text-xl text-white headingStyle md:text-5xl">
                Dream of a better future -->
  </h2> */}
              {/*}     <p className="relative py-5 text-base paragraphStyle md:text-2xl">
                Through our <span className="font-bold">shared</span> values and
                a <span className="font-bold">visionary</span> approach to{' '}
                <span className="font-bold">technology</span>
                <br />
                Trigan is leading change and future proofing{' '}
                <span className="font-bold">innovation</span>.
</p> */}
              <h2 className="headingStyle relative mt-20 mb-20 text-xl text-white md:text-5xl">
                Dream of a better future.
              </h2>

              <HorizontalSlider />

              {/*}    <p className="relative py-2 text-base paragraphStyle md:text-xl">
                We develop blockchain technologies to create real-world and
                metaverse spaces defining the future of living.{' '}
              </p>
              <p className="relative py-2 text-base paragraphStyle md:text-xl">
                We aim to create a better world that is unbiased, equal and
                sustainable while abundant with opportunity for everyone,
                regardless of background or personal circumstances.{' '}
</p> */}
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
      {cards.map((card, index) => (
        <ScrollingSlideShowElement
          key={card.id}
          index={index}
          centered={centered}
          innerRef={elementsRef.current[index]}
          headerText={card.headerText}
          mainText={card.mainText}
          buttons={card.buttons}
          // aosdata={card.aos}
        />
      ))}
    </div>
  )
}

export default ScrollingSlideShow
