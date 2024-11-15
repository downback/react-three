import React from "react"
import ContactForm from "../components/ContactForm"
import styles from "./ContactSection.module.css"

const ContactSection = () => {
  return (
    <section id="contact-section" className={styles.parallaxItem}>
      <div>
        <figure className={styles.imgWrap}>
          <div className={styles.img}></div>
        </figure>
        <h1>Booking Page</h1>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection
