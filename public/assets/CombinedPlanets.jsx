import MoonModel from '../MoonTexture/Moon'
import Model from '../EarthTexture/Draco'
import React, { memo, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Combined() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [scaleDownValue, setScaleDownValue] = useState(12)
  const [Device, setDevice] = useState(30)
  const combinedRef = React.useRef()

  useFrame(() => {
    // Change position of the whole group, dependin on scrollPosition
    if (scrollPercent < 12) {
      // console.log(`test ${scrollPercent}`)
      combinedRef.current.position.y = -scrollPercent / 4
      combinedRef.current.position.z = scrollPercent / 4
    }

    if (scrollPercent < 161 && scrollPercent > 12) {
      combinedRef.current.position.y = -3
      combinedRef.current.position.z = 3
    }
    if (scrollPercent > 160 && scrollPercent < 172) {
      combinedRef.current.position.y = -scaleDownValue / 4
      combinedRef.current.position.z = scaleDownValue / 4
    }
  })

  // Calculate the scale down value.
  useEffect(() => {
    setScaleDownValue(Math.abs(scrollPercent - 172))
  }, [scrollPercent])

  //Scroll zoom
  useEffect(() => {
    if (1024 < window.innerWidth) {
      setDevice(30)
    } else {
      setDevice(33)
    }
    document.body.onscroll = () => {
      //calculate the current scroll progress as a percentage
      const tempScrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          ((document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
            document.documentElement.clientHeight)) *
        200
      setScrollPercent(tempScrollPercent)
    }
  }, [setDevice, window.innerWidth])

  return (
    // Grup all the elements
    <group ref={combinedRef}>
      <Model />
      <MoonModel />
    </group>
  )
}

export default memo(Combined)
