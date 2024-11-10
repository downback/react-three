import React, { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.registerPlugin(useGSAP)

import ThreeD from "../components/ThreeD"
import styles from "./IntroductionSection.module.css"

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
        <h1>I'm Daeun</h1>
        <p>Frontend Developer</p>
      </div>
      <ThreeD />
    </section>
  )
}

export default IntroductionSection
