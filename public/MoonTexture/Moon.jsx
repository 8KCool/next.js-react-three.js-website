import React, { memo, useEffect, useRef, useState } from 'react'
import {useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function MoonModel(){
    // Import Moon Object
    let moon = useLoader(
        GLTFLoader, "MoonTexture/moon.glb"
    ).scene

    const moonRef = React.useRef()

    useFrame(({ clock }) => {
        // Rotation of the Moon around its orbit
        moon.rotation.y += 0.005

        // Speed of rotation around the Earth
        const t = clock.getElapsedTime();

        // Rotation of the moon around the earth
        const x = 3 * Math.sin(t/2);
        const z = -3 * Math.cos(t/2);
        moon.position.x = x;
        moon.position.z = z;
      });


      useEffect(() => {
        //Make moon Smaller 
        moon.scale.set(0.5, 0.5, 0.5)
      }, [])

    return(
        <>
            {/* Moon Object*/}
            <primitive ref={moonRef} object={moon} position={[0 , 0.5, 0]}/>
        </>
    )
}


useGLTF.preload('MoonTexture/moon.glb')


export default memo(MoonModel)
