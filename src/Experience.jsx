import { OrbitControls, RoundedBox, useTexture, Text, useScroll } from "@react-three/drei"
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
      <Text
      // castShadow
      // receiveShadow
      // font={'./fonts/BagossStandard-Regular-msdf.json'}
      scale={0.5}
      position={[-1.4, -0.5, 0]}
      rotation={[0, Math.PI / 2, 0]}
      >
        Lorem Ipsum dolor sit amet, consectetuer
        <meshBasicMaterial 
        color={'#ffffff'}
        
        />
      </Text>
      <Model_02 />
    </>
  )}