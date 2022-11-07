import { ReactNode } from 'react'
import SupporterCard from './SupporterCard'

interface SupportersSectionProps {
  children?: ReactNode
}

export const SupportersSection: React.FC<SupportersSectionProps> = () => {
  const supporters = [
    {
      name: 'Nike',
      img: null,
      alt: 'Nike',
    },
    {
      name: 'Adidas',
      img: null,
      alt: 'Adidas',
    },
    {
      name: 'New Balance',
      img: null,
      alt: 'New Balance',
    },
    {
      name: 'Under Armour',
      img: null,
      alt: 'Under Armour',
    },
  ]

  return (
    <section className="relative z-20 flex flex-col items-center justify-center gap-10 py-20">
      <h2 className=" text-[3rem] font-bold text-white">Our Supporters</h2>
      <div className="flex w-10/12 justify-around">
        {supporters.map((supporter) => (
          <SupporterCard alt={supporter.alt} />
        ))}

        <button className="h-[100px] w-[150px] rounded-xl bg-sky-600 text-lg font-semibold text-white shadow-xl hover:bg-sky-500">
          Become <br />a Supporter
        </button>
      </div>
    </section>
  )
}
