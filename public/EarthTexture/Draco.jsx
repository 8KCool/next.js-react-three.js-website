import React, { memo, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/planet.glb')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()
  const controlRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8
    cloudRef.current.rotation.y = elapsedTime / 3 / 8
  })

  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} ref={controlRef}>  
      <group
        rotation={[Math.PI / 1.75, 0, 0]}
        scale={0.8 / Device}
        ref={cloudRef}
      >
        {/* Initial scale96.72 scale */}
        <group scale={66.9} ref={earthRef}> 
          <mesh geometry={nodes.Earth.geometry} material={materials.Earth} />
        </group>
        <group ref={earthRef} scale={67.82}>
          <mesh
            geometry={nodes.Clouds.geometry}
            material={materials.Clouds}
          />
        </group>  
      </group>
    </group>
  </group>  )
}

useGLTF.preload('EarthTexture/planet.glb')

export default memo(Model)
