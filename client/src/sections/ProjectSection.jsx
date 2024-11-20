import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import styles from "./ProjectSection.module.css"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const ProjectSection = () => {
  const horizontal = useRef(null)
  const sectionsRef = useRef([])
  const slide1 = useRef()
  const slide2 = useRef()
  const slide3 = useRef()
  const slide4 = useRef()
  const slide5 = useRef()

  useGSAP(() => {
    const sections = gsap.utils.toArray(sectionsRef.current)
    const totalSections = sections.length

    gsap.to(sections, {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal.current,
        start: "top top",
        end: () => "+=" + (horizontal.current.offsetWidth - window.innerWidth),
        pin: true,
        scrub: 2,
        snap: {
          snapTo: 1 / (totalSections - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })

    slide1.current.addEventListener("click", () => {
      gsap.to(sectionsRef.current, {
        xPercent: 0,
        duration: 1,
        scrollTo: { autoKill: false },
      })
    })

    slide2.current.addEventListener("click", () => {
      gsap.to(sectionsRef.current, {
        xPercent: -100,
        duration: 1,
        scrollTo: { autoKill: false },
      })
    })

    slide3.current.addEventListener("click", () => {
      gsap.to(sectionsRef.current, {
        xPercent: -200,
        duration: 1,
        scrollTo: { autoKill: false },
      })
    })

    slide4.current.addEventListener("click", () => {
      gsap.to(sectionsRef.current, {
        xPercent: -300,
        duration: 1,
        scrollTo: { autoKill: false },
      })
    })

    slide5.current.addEventListener("click", () => {
      gsap.to(sectionsRef.current, {
        xPercent: -400,
        duration: 1,
        scrollTo: { autoKill: false },
      })
    })
  }, [])

  return (
    <>
      {/* <div className={styles.fixedText} ref={fixedText}>
        hihi
      </div> */}

      <main id="project-section" className={styles.horizontal} ref={horizontal}>
        <ul className={styles.sliderWrapper}>
          <li className={styles.sliderIcon}>
            <div ref={slide1}>a</div>
          </li>
          <li className={styles.sliderIcon}>
            <div ref={slide2}>b</div>
          </li>
          <li className={styles.sliderIcon}>
            <div ref={slide3}>c</div>
          </li>
          <li className={styles.sliderIcon}>
            <div ref={slide4}>d</div>
          </li>
          <li className={styles.sliderIcon}>
            <div ref={slide5}>e</div>
          </li>
        </ul>
        <section
          id="horizontal-section1"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <span className={styles.itemNum}>01</span>

          <div className={styles.img}></div>
        </section>

        <section
          id="horizontal-section2"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <span className={styles.itemNum}>02</span>

          <div className={styles.img}></div>
        </section>

        <section
          id="horizontal-section3"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <span className={styles.itemNum}>03</span>

          <div className={styles.img}></div>
        </section>

        <section
          id="horizontal-section4"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <span className={styles.itemNum}>04</span>

          <div className={styles.img}></div>
        </section>

        <section
          id="horizontal-section5"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <span className={styles.itemNum}>05</span>

          <div className={styles.img}></div>
        </section>
      </main>
    </>
  )
}

export default ProjectSection
