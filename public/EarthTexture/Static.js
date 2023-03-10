import React, { memo, useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Model of Earth that does not change on scroll
const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/planet.glb')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8
    cloudRef.current.rotation.y = elapsedTime / 3 / 8
  })
  useEffect(() => {
    if (1024 < window.innerWidth) {
      setDevice(30)
    } else {
      setDevice(33)
    }
  }, [setDevice, window.innerWidth])

  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group
        rotation={[Math.PI / 1.75, 0, 0]}
        scale={0.8 / Device}
        ref={cloudRef}
      >
        <group scale={96.72} ref={earthRef}>
          <mesh geometry={nodes.Earth.geometry} material={materials.Earth} />
        </group>
        <group ref={earthRef} scale={97.46}>
          <mesh
            geometry={nodes.Clouds.geometry}
            material={materials.Clouds}
          />
        </group>
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('EarthTexture/planet.glb')
 
export default memo(Model)
