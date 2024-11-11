import React from "react"

import {
  ScrollControls,
  Scroll,
  Environment,
  Sparkles,
  Backdrop,
  Float,
  Ring,
} from "@react-three/drei"
import { Logo } from "./Logo"

function Model() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <Environment preset="warehouse" />

      <ScrollControls pages={1}>
        <Logo scale={10} />
        {/* <Scroll html style={{ width: "100%" }}></Scroll> */}
      </ScrollControls>
    </>
  )
}

export default Model
