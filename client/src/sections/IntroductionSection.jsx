import React, { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import styles from "./IntroductionSection.module.css"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.registerPlugin(useGSAP)

function IntroductionSection() {
  const introContainer = useRef()
  const textContainer1 = useRef()
  const textContainer2 = useRef()

  useGSAP(() => {
    const introAnimation = gsap.timeline()
    introAnimation.to(introContainer.current, { autoAlpha: 0 })

    ScrollTrigger.create({
      animation: introAnimation,
      trigger: introContainer.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: true,
      id: "intro",
    })

    const textPin1 = gsap.timeline()
    textPin1.to(textContainer1.current, {
      // scale: 0.5,
      scrollTrigger: {
        trigger: "#animationTrigger1",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
        id: "textPin1",
      },
    })

    const textPin2 = gsap.timeline()
    textPin2.to(textContainer2.current, {
      // scale: 0.5,
      scrollTrigger: {
        trigger: "#animationTrigger2",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
        id: "textPin2",
      },
    })
  }, {})

  return (
    <div id="introduction" className={styles.introSection}>
      <div className={styles.backgroundColor} ref={introContainer}></div>
      <section className={styles.introContainer}>
        <a
          className={`${styles.text} ${styles.text1}`}
          href="https://www.youtube.com/watch?v=Y0V_Pjfs9ew"
        >
          hihihihi111
        </a>
      </section>
      <section
        id="animationTrigger1"
        ref={textContainer1}
        className={styles.introContainer}
      >
        <div className={`${styles.text} ${styles.text2}`}>hihihihi222</div>
      </section>
      <section
        id="animationTrigger2"
        ref={textContainer2}
        className={styles.introContainer}
      >
        <div className={`${styles.text} ${styles.text3}`}>hihihihi333</div>
      </section>
    </div>
  )
}

export default IntroductionSection
