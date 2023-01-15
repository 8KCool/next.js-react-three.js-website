import React, { memo, useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { lerp } from 'math.gl'

let scrollPercent = 0

const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/planet.glb')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()
  const controlRef = useRef()
  const [rotationY, setRotationY] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [positionZ, setPositionZ] = useState(0)
  const [rotationZ, setRotationZ] = useState(0)

  useEffect(() => {
    if (1024 < window.innerWidth) {
      setDevice(30)
    } else {
      setDevice(33)
    }
    document.body.onscroll = () => {
      scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          ((document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
            document.documentElement.clientHeight)) *
        100
      setRotationY(lerp(-3.5 / 28, 0, scrollPercent / 100))
      setPositionY(lerp(-3.5, 0, scrollPercent / 100))
      setPositionZ(lerp(3.5, 0, scrollPercent / 100))
      setRotationZ(lerp(-0.5, 0, scrollPercent / 100))
    }
  }, [setDevice, window.innerWidth])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8
    cloudRef.current.rotation.y = elapsedTime / 3 / 8
    controlRef.current.position.y = positionY
    controlRef.current.position.z = positionZ
    cloudRef.current.rotation.z = rotationZ
  })

  materials.Earth.emissive = new THREE.Color(0x336699)
  materials.Clouds.transparent = true;
  materials.Clouds.opacity = 0.51;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} ref={controlRef}>
        <group
          rotation={[Math.PI / 1.75, 0, 0]}
          scale={1 / Device}
          ref={cloudRef}
        >
          <group scale={96.72} ref={earthRef}>
            <mesh geometry={nodes.Earth.geometry} material={materials.Earth} />
          </group>
          <group scale={[0.5, 0.5, 0.5]} ref={earthRef}>
            <mesh
              geometry={nodes.Clouds.geometry}
              material={materials.Clouds}
              scale={[0.5, 0.5, 0.5]}
            />
          </group>
          <mesh
            scale={[0.5, 0.5, 0.5]}
            position={[20, 20, 20]}
            geometry={nodes.Clouds.geometry}
            material={materials.Clouds}
          />
          <mesh
            scale={[0.3, 0.3, 0.3]}
            position={[-20, -20, -20]}
            rotation={[0, Math.PI / 2, 0]}
            geometry={nodes.Clouds.geometry}
            material={materials.Clouds}
          />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('EarthTexture/planet.glb')

export default memo(Model)