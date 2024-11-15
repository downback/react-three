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
  }, [])

  return (
    <>
      {/* <div className={styles.fixedText} ref={fixedText}>
        hihi
      </div> */}
      <main id="project-section" className={styles.horizontal} ref={horizontal}>
        <section
          id="horizontal-section1"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <span className={styles.itemNum}>01</span>
          <figure className={styles.imgWrap}>
            <div className={styles.img}></div>
          </figure>
        </section>

        <section
          id="horizontal-section2"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <span className={styles.itemNum}>02</span>
          <figure className={styles.imgWrap}>
            <div className={styles.img}></div>
          </figure>
        </section>

        <section
          id="horizontal-section3"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <span className={styles.itemNum}>03</span>
          <figure className={styles.imgWrap}>
            <div className={styles.img}></div>
          </figure>
        </section>

        <section
          id="horizontal-section4"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <span className={styles.itemNum}>04</span>
          <figure className={styles.imgWrap}>
            <div className={styles.img}></div>
          </figure>
        </section>

        <section
          id="horizontal-section5"
          className={styles.parallaxItem}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <span className={styles.itemNum}>05</span>
          <figure className={styles.imgWrap}>
            <div className={styles.img}></div>
          </figure>
        </section>
      </main>
    </>
  )
}

export default ProjectSection
