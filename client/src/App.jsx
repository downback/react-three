// client/src/App.js

import React from "react"
import LandingPage from "./sections/LandingPage"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import ContactSection from "./sections/ContactSection"
// import ProjectSection from "./sections/ProjectSection"
// import Wrapper from "./ui/Wrapper"

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route
    //       path="/booking"
    //       element={
    //         <Wrapper>
    //           <ContactSection />
    //         </Wrapper>
    //       }
    //     />
    //     <Route path="/drawing" element={<ProjectSection />} />
    //   </Routes>
    // </Router>
    <>
      <LandingPage />
    </>
  )
}

export default App
