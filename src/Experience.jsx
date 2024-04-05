import { OrbitControls, RoundedBox, useTexture, Text3D } from "@react-three/drei"
import { } from "@react-three/fiber"

import Model from './Model.jsx'
import Model_02 from './Model_02.jsx'


export default function Experience(){

  return (
    <>
      <OrbitControls />       
      <Text3D
      castShadow
      receiveShadow
      font={'./fonts/inter.json'}
      scale={0.5}
      position={[-0.6, -1.1, -4]}
      >
        Hello
        <meshStandardMaterial />
      </Text3D>
      <Model_02 />
    </>
  )}