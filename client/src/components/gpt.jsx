import React, { useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three" // Import THREE from the three.js library

import "./threeD.css"

const ThreeD = ({ scrollProgress }) => {
  const { scene } = useGLTF("/nami.gltf") // Use the new GLTF path
  const modelRef = useRef()

  const { camera } = useThree() // Access the camera from @react-three/fiber

  // Use useFrame hook to update the camera position every frame based on scrollProgress
  useFrame(() => {
    if (modelRef.current) {
      // Move the camera along the Z-axis (you can change this to X/Y if needed)
      camera.position.lerp(
        new THREE.Vector3(0, 0, 5 - scrollProgress * 3), // Move the camera closer/further
        0.1 // Smoothness of the camera movement
      )
      camera.lookAt(modelRef.current.position) // Keep the camera looking at the model
    }
  })

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
