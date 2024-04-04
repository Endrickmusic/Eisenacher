import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three'

export default function Model(props) {

  const dirLight = useRef()  
  const { nodes } = useGLTF('./models/Rolltreppe_01.glb')
  
  return (
    <group {...props} dispose={null}>
      <group position={[-3.098, 1.336, -0.662]} rotation={[0, 1.571, 0]}>

      <pointLight 

    position={[0, 4, 0]}
    intensity={35}
    ref={dirLight}
    />
      <pointLight 

    position={[1.5, 2, 14]}
    intensity={35}
    ref={dirLight}
    />

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
      </group>
    </group>
  )
}

useGLTF.preload('./models/Rolltreppe_01.glb')

