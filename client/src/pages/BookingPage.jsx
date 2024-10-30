// client/src/pages/BookingPage.jsx

import React, { useState } from "react"
import ContactForm from "../components/ContactForm"

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Booking for ${formData.name} on ${formData.bookingDate} submitted!`)
  }

  return (
    <div>
      <h1>Booking Page</h1>
      <ContactForm />
    </div>
  )
}

export default BookingPage
