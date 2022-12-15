import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

let scrollPercent = 0

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/Draco.gltf')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()
  const controlRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8
    // earthRef.current.position.y = -20;
    cloudRef.current.rotation.y = elapsedTime / 3 / 8
    // if (scrollPercent < 7) {
    //   controlRef.current.position.y = 0
    //   controlRef.current.position.z = 0
    //   cloudRef.current.rotation.z = 0
    // } else 
    // if (scrollPercent >= 7 && scrollPercent < 21) {
    if (scrollPercent < 14) {
      controlRef.current.position.y = -(scrollPercent) / 4
      controlRef.current.position.z = (scrollPercent) / 4
      cloudRef.current.rotation.z = -(scrollPercent) / 28
      // console.log(controlRef.current.rotation.y );
    } else {
      controlRef.current.position.y = -3.5
      controlRef.current.position.z = 3.5
      cloudRef.current.rotation.z = -0.5
    }
  })
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

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} ref={controlRef}>
        <group
          rotation={[Math.PI / 1.75, 0, 0]}
          scale={1 / Device}
          ref={cloudRef}
        >
          <group scale={96.72} ref={earthRef}>
            <mesh
              geometry={nodes.pSphere1_phong1_0.geometry}
              material={materials.phong1}
            />
            <mesh
              geometry={nodes.pSphere1_phong1_0_1.geometry}
              material={materials.phong1}
            />
          </group>
          <group ref={earthRef} scale={97.46}>
            <mesh
              geometry={nodes.pSphere4_lambert6_0.geometry}
              material={materials.lambert6}
            />
            <mesh
              geometry={nodes.pSphere4_lambert6_0_1.geometry}
              material={materials.lambert6}
            />
          </group>
          <group scale={98.1}>
            <mesh
              geometry={nodes.pSphere5_lambert7_0.geometry}
              material={materials.lambert7}
            />
            <mesh
              geometry={nodes.pSphere5_lambert7_0_1.geometry}
              material={materials.lambert7}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Draco.gltf')
