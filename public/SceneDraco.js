import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('earthTexture11/sceneDraco.gltf')
  const { actions } = useAnimations(animations, group)
  // const [Device, setDevice] = useState(350)
  // const earthRef = useRef()
  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   earthRef.current.rotation.y = elapsedTime / 5;
  // })
  // useEffect(() => {
  //   if (1024 < window.innerWidth) {
  //     setDevice(315)
  //   } else {
  //     setDevice(350)
  //   }
  // },[setDevice, window.innerWidth])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Earth_animationfbx" rotation={[Math.PI / 1.75, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Clouds" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                  <mesh name="Clouds_Clouds_0" geometry={nodes.Clouds_Clouds_0.geometry} material={materials.Clouds} />
                </group>
                <group name="Earth" rotation={[-Math.PI / 2, 0, -1.54]} scale={10}>
                  <mesh name="Earth_Earth_0" geometry={nodes.Earth_Earth_0.geometry} material={materials.Earth} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sceneDraco.gltf')
