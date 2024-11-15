import styles from "./Sidebar.module.css"
import "./sidebar.css"
import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.registerPlugin(useGSAP)

function Sidebar() {
  const linksRef = useRef([])
  const sidebarContainer = useRef()
  const sidebar = useRef()

  useGSAP(
    () => {
      const sidebarAnimation = gsap.timeline({
        scrollTrigger: {
          start: "top -500",
          end: "bottom 500",
          scrub: true,
          id: "sidebar",
          markers: true,
          toggleClass: {
            targets: sidebar.current,
            className: "is-active",
          },
        },
      })

      sidebarAnimation.to(sidebar.current, {
        scale: 0.9,
      })
      const links = linksRef.current

      links.forEach((link) => {
        const targetSection = document.querySelector(link.getAttribute("href"))

        ScrollTrigger.create({
          trigger: targetSection,
          start: "top top",
          end: "bottom bottom",
          onToggle: (self) => {
            if (self.isActive) {
              links.forEach((l) => l.classList.remove("active"))
              link.classList.add("active")
            }
          },
        })

        link.addEventListener("click", (e) => {
          e.preventDefault()

          links.forEach((l) => l.classList.remove("active"))
          link.classList.add("active")

          gsap.to(window, {
            duration: 1,
            scrollTo: targetSection,
            ease: "power2.out",
            overwrite: "auto",
          })
        })
      })
    },
    { scope: sidebarContainer }
  )

  return (
    <nav ref={sidebarContainer} className={styles.sidebar}>
      <ul ref={sidebar} id="navWrapper" className={styles.navWrapper}>
        <li>
          <a
            href="#introduction"
            className={styles.active}
            ref={(el) => (linksRef.current[0] = el)}
          >
            HOME
          </a>
        </li>
        <li>
          <a href="#animationTrigger1" ref={(el) => (linksRef.current[1] = el)}>
            s2
          </a>
        </li>
        <li>
          <a
            href="#horizontal-section1"
            ref={(el) => (linksRef.current[2] = el)}
          >
            s3
          </a>
        </li>
        <li>
          <a href="#contact-section" ref={(el) => (linksRef.current[3] = el)}>
            s4
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
