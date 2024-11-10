import React from "react"
import ContactForm from "../components/ContactForm"
import styles from "./ContactSection.module.css"

const ContactSection = () => {
  return (
    <section id="section8" className={styles.parallaxItem}>
      <span className={styles.itemNum}>08</span>
      <figure className={styles.imgWrap}>
        <div className={styles.img}></div>
      </figure>
      <h1>Booking Page</h1>
      <ContactForm />
    </section>
  )
}

export default ContactSection
