import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Wrapper = ({ children }) => {
  const navigate = useNavigate()

  return (
    <Overlay>
      <ContentContainer>
        <CloseButton onClick={() => navigate("/")}>X</CloseButton>
        {children}
      </ContentContainer>
    </Overlay>
  )
}

// Styled components for overlay, content, and close button
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ContentContainer = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #333;
  cursor: pointer;
`

export default Wrapper
