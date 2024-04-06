import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useHelper, OrbitControls, ScrollControls } from '@react-three/drei'
import { DoubleSide, PointLightHelper } from 'three'

export default function Model(props) {

  const pointLight1 = useRef() 
  const pointLight2 = useRef() 

  useHelper(pointLight2, PointLightHelper, 1, "red")
   
  const { nodes } = useGLTF('./models/Rolltreppe_01.glb')
  let time = 0

  useFrame((state, delta)=>{
    
    time += delta
    pointLight2.current.position.z = (Math.sin( time / 4.) * 4. ) + 2
    pointLight2.current.rotation.y = Math.PI * 1.5
  })
  
  return (

    <group {...props} dispose={null}>
      
      <group 
      position={[0, -1.8, -8]} 
      rotation={[0, 0, 0]}>

      {/* <pointLight 

    position={[1, 8, 0]}
    intensity={30}
    ref={pointLight1}
    /> */}
    <ambientLight 
    intensity={0.0}
    />
      <pointLight 
    // castShadown
    // shadow-mapSize={[1024, 1024]}
    position={[1.5, 1.5, 14]}
    // rotation={[0, 1.8 * Math.PI , 0]}
    scale={0.5}
    intensity={25}
    ref={pointLight2}
    />
    <ScrollControls 
    pages={3}
    damping={0.25}
    >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
        >
        <meshStandardMaterial 
        side={DoubleSide}
        map={nodes.Mesh_0.material.map}
        roughness={0.8}
        />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_1.geometry}
        >
        <meshStandardMaterial 
        side={DoubleSide}
        map={nodes.Mesh_0_1.material.map}
        />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_2.geometry}
        >
        <meshStandardMaterial 
        side={DoubleSide}
        map={nodes.Mesh_0_2.material.map}
        />
        </mesh>
        </ScrollControls>
      </group>
    </group>

  )
}

useGLTF.preload('./models/Rolltreppe_01.glb')

