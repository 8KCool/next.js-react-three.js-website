import React, { memo, useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Model of Earth that does not change on scroll
const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('EarthTexture/planet.glb')
  const { actions } = useAnimations(animations, group)
  const [Device, setDevice] = useState(30)
  const earthRef = useRef()
  const cloudRef = useRef()
  const lightRef = useRef()
  const [lod, setLod] = useState("medium")
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 2.5 / 8
    cloudRef.current.rotation.y = elapsedTime / 3 / 8
    lightRef.current.lookAt(earthRef.current.position)


  })
  useEffect(() => {
    if (1024 < window.innerWidth) {
      setDevice(30)
    } else {
      setDevice(33)
    }
    if (window.innerWidth > 1920) {
      setLod("high")
    } else if (window.innerWidth > 1024) {
      setLod("medium")
    } else {
      setLod("low")
    }
  }, [setDevice, window.innerWidth])
  
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
        lightColor: { value: new THREE.Color(0xff0000) },
        lightIntensity: { value: 1.0 }
    },
    vertexShader: `
        varying vec3 normal;
        varying vec3 viewDirection;
        void main() {
            normal = normalize(vec3(modelViewMatrix * vec4(normal, 0.0)));
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            viewDirection = normalize(vec3(modelViewMatrix * worldPosition));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 lightColor;
        uniform float lightIntensity;
        varying vec3 normal;
        varying vec3 viewDirection;
        void main() {
            float intensity = pow(dot(normalize(normal), normalize(viewDirection)), 4.0);
            gl_FragColor = vec4(mix(color, lightColor * intensity * lightIntensity, 0.5), 1.0);
        }
    `
});

materials.Clouds.material = glowMaterial;
  
  materials.Earth.emissive = new THREE.Color(0x336699)
  materials.Earth.emissiveIntensity = 1;
  materials.Clouds.transparent = true;
  materials.Clouds.opacity = 0.5;

  materials.Clouds.emissive = new THREE.Color(0x336699)
  materials.Clouds.emissiveIntensity = 5;
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          rotation={[Math.PI / 1.75, 0, 0]}
          scale={1 / Device}
          ref={cloudRef}
        >
          <group scale={96.72} ref={earthRef}>
              <mesh geometry={nodes.Earth.geometry} material={materials.Earth} /> 
           </group>
           
           <group scale={[0.5, 0.5, 0.5]}
              position={[20, 20, 20]} ref={lightRef}>
                <spotLight
                color={0xffffff}
                intensity={100}
                angle={Math.PI / 4}
                penumbra={0.05}
                castShadow
                />
            </group>

          <group scale={[0.5, 0.5, 0.5]} ref={earthRef}>
            <mesh
              geometry={nodes.Clouds.geometry}
              material={materials.Clouds}
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