// client/src/pages/BookingPage.jsx

import React, { useState } from "react"

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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Booking Date:
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BookingPage
