import { OrbitControls, RoundedBox, useTexture, Text3D, useScroll } from "@react-three/drei"
import { } from "@react-three/fiber"

import Model from './Model.jsx'
import Model_02 from './Model_02.jsx'


export default function Experience(){

const scroll = useScroll() 


  return (
    <>
      {/* <OrbitControls 
      enablePan={false}
      enableRotate={false}
      enableZoom={false}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI - Math.PI / 2.1}
      dampingFactor={0.55} 
      target0={[0, 0, 0]}
      />         */}
      <Text3D
      castShadow
      receiveShadow
      font={'./fonts/inter.json'}
      scale={0.5}
      position={[-0.6, -1.1, -4]}
      >
        Hello
        <meshStandardMaterial 
        metalness={1.0}
        roughness={0.1}
        
        />
      </Text3D>
      <Model_02 />
    </>
  )}