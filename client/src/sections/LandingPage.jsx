import React from "react"
import styles from "./LandingPage.module.css" // Import CSS module

import ContactSection from "./ContactSection"
import ProjectSection from "./ProjectSection"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import IntroductionSection from "./IntroductionSection"
import Test from "../components/Test"
import { Canvas } from "@react-three/fiber"

const LandingPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <section id="section1">Introduction Section</section> */}

      <IntroductionSection />
      {/* <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Test />
      </Canvas> */}

      <ProjectSection />

      <ContactSection />
    </>
  )
}

export default LandingPage
