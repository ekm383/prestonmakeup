import React from "react"
import styled from "styled-components"
import BackgroundPage from "../hero/BackgroundPage"

const Banner = ({ title }) => {
  return (
    <BackgroundPage>
      <StyledBanner>
        <h2>{title}</h2>
      </StyledBanner>
    </BackgroundPage>
  )
}

const StyledBanner = styled.div`
  width: 80vw;
  margin: 0rem auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  h2 {
    font-family: "Helvetica";
    font-weight: lighter;
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export default Banner
