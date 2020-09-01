import React from "react"
import styled from "styled-components"

const About = ({ content, content2, content3, content4, content5 }) => {
  return (
    <StyledAbout>
      <div className="copy">
        <h4>My Story</h4>
        <p>{content}</p>
        <p>{content2}</p>
        <p>{content3}</p>
        <p>{content4}</p>
        <p>{content5}</p>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
  width: 80vw;
  margin: 8rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .copy {
    flex-basis: 70%;
    h4 {
      color: var(--white);
      font-size: 2.5rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    p {
      color: var(--white);
      font-size: 0.9rem;
      font-weight: lighter;
      line-height: 1.7rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin: 4rem auto;
    .copy {
      flex-basis: 100%;
      p {
        line-height: 1.5rem;
      }
    }
  }
`

export default About
