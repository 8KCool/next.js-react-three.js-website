import { useState, useEffect } from 'react'

export default function useScrollPosition(scrollFactor = 1) {
  const [position, setPosition] = useState(0)

  //this function will set the value of position when the page is scrolled
  function onScroll() {
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    //removes the eventlistener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return position * scrollFactor
}
