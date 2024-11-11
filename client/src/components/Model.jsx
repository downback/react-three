import { Canvas } from "@react-three/fiber"
import { Logo } from "./Logo"
import { Environment, OrbitControls } from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Suspense } from "react"
import { Loading } from "./Loading"
// without registering scrolltriiger the model will break
gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  return (
    <Canvas
      camera={{
        position: [1.9334986912496424, 0.8899117308182286, 1.779849826935825],
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <Suspense fallback={<Loading />}>
        <Logo scale={10} />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  )
}

export default Model
