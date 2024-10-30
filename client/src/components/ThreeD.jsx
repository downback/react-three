import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

const ThreeD = () => {
  return (
    <Canvas
      style={{ background: "#141414", height: "100vh", width: "100%" }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

// Model component to load and display the GLTF model
const Model = () => {
  const { scene } = useGLTF("/nami.gltf") // Use the new GLTF path
  const modelRef = useRef()

  // Simple rotation animation for the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} scale={0.5} />
}

export default ThreeD
