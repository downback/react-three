import React from "react"
import { Link } from "react-router-dom"
import ThreeD from "../components/ThreeD"

const LandingPage = () => {
  return (
    <>
      <h1>Welcome to Our Application</h1>
      <ThreeD />
      <div>
        <Link to="/booking">Booking Page</Link>
        <Link to="/drawing">Drawing Page</Link>
        <Link to="/gallery">Gallery Page</Link>
      </div>
    </>
  )
}

export default LandingPage
