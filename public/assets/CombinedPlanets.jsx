import MoonModel from "../MoonTexture/Moon";
import Model from "../EarthTexture/Draco";
import React, { memo, useEffect, useState } from 'react'
import { useFrame} from '@react-three/fiber'


let scrollPercent = 0

function Combined(){

    const [Device, setDevice] = useState(30)
    const combinedRef = React.useRef()


    useFrame(() => {
        // Change position of the whole group, dependin on scrollPosition
        if (scrollPercent < 12) {
            // console.log(`test ${scrollPercent}`)
            combinedRef.current.position.y = -scrollPercent / 4
            combinedRef.current.position.z = scrollPercent / 4
          } else {
            combinedRef.current.position.y = -3
            combinedRef.current.position.z = 3
          }
      });


        //Scroll zoom
        useEffect(() => {
        if (1024 < window.innerWidth) {
          setDevice(30)
        } else {
          setDevice(33)
        }
        document.body.onscroll = () => {
          //calculate the current scroll progress as a percentage
          scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
              ((document.documentElement.scrollHeight ||
                document.body.scrollHeight) -
                document.documentElement.clientHeight)) *
            100
        }
      }, [setDevice, window.innerWidth])

    return(

        // Grup all the elements
        <group ref={combinedRef}>
            <Model/>
            <MoonModel/>
        </group>
    )
}


export default memo(Combined)