import React from "react"

import styles from "./LandingPage.module.css" // Import CSS module

import ContactSection from "./ContactSection"
import ProjectSection from "./ProjectSection"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import IntroductionSection from "./IntroductionSection"

import Model from "../components/Model"

const LandingPage = () => {
  return (
    <div className={styles.landingPageWrapper}>
      <Header />
      <Sidebar />
      <div className={styles.modelContainer}>
        <Model />
      </div>
      <IntroductionSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage

//TODO : booking format from the previous form + budget(mandatory)
//menu: flash / booking / graphic(slider)
//3d model : dark gray / metallic / smooth
// background-color: black(dimmed)-> white(full) 유지
