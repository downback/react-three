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
      markers: false,
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
        markers: false,
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
        markers: false,
        id: "textPin2",
      },
    })
  }, {})

  return (
    <div id="introduction" className={styles.introSection}>
      <div className={styles.backgroundColor} ref={introContainer}>
        <div className={styles.drawing}></div>
        <svg
          width="1419"
          height="729"
          viewBox="0 0 1419 729"
          fill="none"
          className={styles.drawingSvg}
        >
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur1"
            />
            <feColorMatrix
              in="blur1"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -10"
            />
          </filter>
          <path
            d="M0 720.896C142.185 723.653 462.832 671.855 677.398 554.811C966.698 397.002 957.71 107.389 780.339 107.389C677.398 107.389 642.493 209.049 660.517 278.201C678.54 347.354 745.917 415.091 992.137 349.718C1201.57 294.112 1402.13 124.726 1411 1"
            stroke="#7180a9"
            strokeWidth="15"
            pathLength="1"
            className={styles.drawingPath}
          />
        </svg>
        <svg className={styles.circle}>
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="#7180a9"
            className={styles.circle}
          />
        </svg>
      </div>
      <section className={styles.introContainer}>
        <div className={`${styles.text} ${styles.text1}`}>
          Hello,
          <br />
          I'm Nami Nam
        </div>
        <div>
          <div className={styles.downArrow} />
        </div>
      </section>
      <section
        id="animationTrigger1"
        ref={textContainer1}
        className={styles.introContainer}
      >
        <div className={`${styles.text} ${styles.text2}`}>
          focusing on <br /> creativity
        </div>
      </section>
      <section
        id="animationTrigger2"
        ref={textContainer2}
        className={styles.introContainer}
      >
        <div className={`${styles.text} ${styles.text3}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquet ex convallis interdum ornare. Sed congue elit urna, a tempor
          neque porta sit amet. In facilisis eros ut lorem hendrerit mattis.
        </div>
      </section>
    </div>
  )
}

export default IntroductionSection
