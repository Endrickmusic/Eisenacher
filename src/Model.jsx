import React, { useRef } from 'react'
import { useEnvironment, useGLTF, useHelper } from '@react-three/drei'
import { BackSide, DoubleSide, DirectionalLightHelper } from 'three'

export default function Model(props) {

  const dirLight = useRef() 

  const envMap = useEnvironment({files:'./hdris/envmap.hdr'})

  useHelper(dirLight, DirectionalLightHelper, 1, "red")

  const { nodes } = useGLTF('./models/Eisenacher_Rolltreppe.glb')
  console.log(nodes)
  
  return (



    <group {...props} dispose={null}>
    
    <directionalLight 
    castShadows
    position={[2, 2, 2]}
    intensity={150}
    ref={dirLight}
    />
    <ambientLight />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
      >
    <meshStandardMaterial 
    // map={nodes.mesh_0.material.map}
    side={DoubleSide}
    envMap={envMap}
    metalness={1}
    roughness={0.1}
    />
    </mesh>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_1.geometry}
      >
        <meshStandardMaterial 
        // map={nodes.mesh_0_1.material.map}
        side={DoubleSide}
        envMap={envMap}
        />
    </mesh>
    </group>
  )
}

useGLTF.preload('./models/Eisenacher_Rolltreppe.glb')