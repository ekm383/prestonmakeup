import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <StyledAbout>
      <div className="copy">
        <h4>My Story</h4>
        <p>
          Preston Meneses is one of the most sought-after celebrity makeup
          artists working today. His artistry has emerged throughout his 15-year
          collaboration with the legendary music superstar Janet Jackson, as
          well as working with celebrities Rihanna, Kelis, Erica Jayne, Brooklyn
          Decker, Halle Berry, Carmen Electra, Kim Kardashian, and Courtney
          Love, just to name a few. He was showcased on television with
          appearances in episodes of “The Real Housewives of Beverly Hills” and
          working on “Dance Moms.” His talents have graced the pages of
          countless magazines, including Vogue, Vogue Italia, Harpers Bazar,
          Harpers Arabia, Essence, InStyle Magazine, FHM, Maxim and numerous
          billboards in New York’s Times Square.
        </p>
      </div>
      <div className="image">
        <p>img</p>
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
