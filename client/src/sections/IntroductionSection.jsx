import React, { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.registerPlugin(useGSAP)

import styles from "./IntroductionSection.module.css"

import Model from "../components/Model"
import ProjectSection from "./ProjectSection"
import ContactSection from "./ContactSection"

function IntroductionSection() {
  const introContainer = useRef()
  const textAnimation = useRef()
  const [scrollProgress, setScrollProgress] = useState(0)

  useGSAP(
    () => {
      const introAnimation = gsap.timeline()
      introAnimation.to(textAnimation.current, { autoAlpha: 0 })

      ScrollTrigger.create({
        animation: introAnimation,
        trigger: introContainer.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
        id: "intro",

        onUpdate: (self) => {
          setScrollProgress(self.progress) // Set the scroll progress value (between 0 and 1)
        },
      })
    },
    { scope: introContainer }
  )

  return (
    <section
      ref={introContainer}
      id="introduction"
      className={styles.introSection}
    >
      <div className={styles.textContainer} ref={textAnimation}>
        <p>hi</p>
        <h1>Nami</h1>
        <p>booking page</p>
      </div>
      <div className={styles.container}>
        <Model />
      </div>
      <div id="sec1" style={{ height: "100vh", color: "white" }}>
        section2
      </div>
      <div id="sec2" style={{ height: "100vh", color: "white" }}>
        section3
      </div>
    </section>
  )
}

export default IntroductionSection
