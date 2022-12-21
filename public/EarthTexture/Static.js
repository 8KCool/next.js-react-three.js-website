import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Model of Earth that does not change on scroll
export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/new/Earth.gltf')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8;
    cloudRef.current.rotation.y = elapsedTime / 3 / 8;
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
        <group rotation={[Math.PI / 1.75, 0, 0]} scale={1 / Device} ref={cloudRef}>
          <group scale={96.72} ref={earthRef}>
            <mesh geometry={nodes.pSphere1_phong1_0.geometry} material={materials.phong1} />
            <mesh geometry={nodes.pSphere1_phong1_0_1.geometry} material={materials.phong1} />
          </group>
          <group ref={earthRef} scale={97.46}>
            <mesh geometry={nodes.pSphere4_lambert6_0.geometry} material={materials.lambert6} />
            <mesh geometry={nodes.pSphere4_lambert6_0_1.geometry} material={materials.lambert6} />
          </group>
          <group scale={98.1}>
            <mesh geometry={nodes.pSphere5_lambert7_0.geometry} material={materials.lambert7} />
            <mesh geometry={nodes.pSphere5_lambert7_0_1.geometry} material={materials.lambert7} />
          </group>
        </group>
      </group>
    </group>
  )
};

useGLTF.preload('/new/Earth.gltf');
