import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ThreeD from "../components/ThreeD"

const LandingPage = () => {
  return (
    <Container>
      <Title>Welcome to Our Application</Title>
      <Description>Explore our features by selecting a page below:</Description>
      <ThreeD />
      <ButtonContainer>
        <StyledLink to="/booking">Booking Page</StyledLink>
        <StyledLink to="/drawing">Drawing Page</StyledLink>
        <StyledLink to="/gallery">Gallery Page</StyledLink>
      </ButtonContainer>
    </Container>
  )
}

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 100vh;
  background-color: #f9f9f9;
`

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const StyledLink = styled(Link)`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

export default LandingPage
