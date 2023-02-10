import { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import React, { lazy, Suspense } from 'react'

const ScrollingSlideShow = lazy(() => import('./scrollingSlideShow'))
const VideoHeader = lazy(() => import('./VideoHeader'))

interface HeroSectionProps {
  children?: ReactNode
}
const BUTTONS = [
  {
    title: 'Buy Now',
    link: '/buy',
  },
]
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    // bg-slate-300/70
    <>
      <div className="relative">
        <VideoHeader></VideoHeader>
        <ScrollingSlideShow />
      </div>
    </>
  )
} 
export default HeroSection