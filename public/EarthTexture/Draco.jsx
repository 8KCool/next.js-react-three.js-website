import React, { memo, useRef, useState } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { useAnimations, useGLTF, Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Selection,
  Select,
  SelectiveBloom 
} from '@react-three/postprocessing'

// extend({ UnrealBloomPass })


const Model = (props) => {
  const group = useRef()
  const blueSpotLight = useRef()
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

<Selection>

            <EffectComposer multisampling={0} disableNormalPass={true}>
              <DepthOfField
                focusDistance={0}
                focalLength={2.22}
                bokehScale={5}
                height={10}
              />
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.1}
                height={500}
                opacity={0.2}
              />
              {/* <Noise opacity={0.05} /> */}
              <Vignette eskil={false} offset={0.2} darkness={1.5} />
            </EffectComposer>
          {/* Earth Initial scale96.72 scale */}
          <Select enabled>
          <group scale={66.9} ref={earthRef}>
            <color attach="background" args={['#000']} />
            <mesh
              // emissive={[0, 0.5, 0.5]}
              //color={[0, 0, 0]}
              emissive="red" emissiveIntensity={2} toneMapped={false}
              color={"#ff0202"}

              // color={[4, 0.1, 1]}
              geometry={nodes.Earth.geometry}
              material={materials.Earth}
            />
            {/* <Shape color={[1, 4, 0.5]} position={[2, 0, 0]}>
              <circleGeometry args={[0.8, 64]} />
            </Shape> */}
          </group>
          </Select>
          </Selection>


          {/* Hide clouds for now */}
          {/* <group ref={earthRef} scale={66.95}>
            <mesh
              geometry={nodes.Clouds.geometry}
              material={materials.Clouds}
            />
          </group> */}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('EarthTexture/planet.glb')

export default memo(Model)
