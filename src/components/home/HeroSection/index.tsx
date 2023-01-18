import { ReactNode } from 'react'
import ScrollingSlideShow from './scrollingSlideShow'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import VideoHeader from './VideoHeader'

interface HeroSectionProps {
  children?: ReactNode
}
const BUTTONS = [
  {
    title: 'Buy Now',
    link: '/buy',
  },
]
export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    // bg-slate-300/70
    <>
      <div className="relative ">
        <VideoHeader />
        <ScrollingSlideShow />
      </div>
    </>
  )
}
