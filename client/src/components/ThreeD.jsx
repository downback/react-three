import React, { useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three" // Import THREE from the three.js library

import "./threeD.css"

const ThreeD = ({ scrollProgress }) => {
  const { scene } = useGLTF("/nami.gltf") // Use the new GLTF path
  const modelRef = useRef()

  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <primitive ref={modelRef} object={scene} scale={0.6} />
    </Canvas>
  )
}

export default ThreeD
