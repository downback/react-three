// client/src/App.js

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import BookingPage from "./pages/BookingPage"
import DrawingPage from "./pages/DrawingPage"
import GalleryPage from "./pages/GalleryPage"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/booking"
          element={
            <Wrapper>
              <BookingPage />
            </Wrapper>
          }
        />
        <Route path="/drawing" element={<DrawingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
