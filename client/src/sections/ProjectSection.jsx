import React from "react"
import styles from "./ProjectSection.module.css"

function ProjectSection() {
  return (
    <main id="horizontal" className={styles.horizontal}>
      <section id="section3" className={styles.parallaxItem}>
        <span className={styles.itemNum}>03</span>
        <figure className={styles.imgWrap}>
          <div className={styles.img}></div>
        </figure>
      </section>

      <section id="section4" className={styles.parallaxItem}>
        <span className={styles.itemNum}>04</span>
        <figure className={styles.imgWrap}>
          <div className={styles.img}></div>
        </figure>
      </section>
    </main>
  )
}

export default ProjectSection
