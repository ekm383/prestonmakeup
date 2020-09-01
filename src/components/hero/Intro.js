import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaInstagram } from "react-icons/fa"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "preston-makeup.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledIntro>
      <div className="intro-box">
        <p>welcome to</p>
        <h1>
          PRESTON <br />
          MAKEUP
        </h1>
        <button>masterclass</button>
      </div>
      <div className="image-box">
        <Img
          className="headshot"
          fluid={data.headshot.childImageSharp.fluid}
          alt="headshot"
        />
      </div>
      <div className="social-box">
        <p>
          Preston Meneses <FaInstagram />
        </p>
      </div>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  width: 90vw;
  margin: 5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .intro-box {
    z-index: 100;
    flex-basis: 40%;
    h1 {
      color: var(--white);
      font-size: 6rem;
      line-height: 6rem;
    }
    p {
      color: var(--white);
      font-size: 1rem;
      font-weight: lighter;
    }
  }
  .image-box {
    flex-basis: 40%;
    margin: -30px 0px 0px -100px;
  }
  .social-box {
    z-index: 100;
    flex-basis: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: var(--white);
    padding: 1rem 0rem;
    padding-top: 100px;
    p {
      font-size: 1rem;
      font-weight: lighter;
    }
    svg {
      font-size: 1.5rem;
      margin-bottom: -0.4rem;
    }
  }
  button {
    margin: 2rem 0rem;
    padding: 1rem 2rem;
    background: var(--lightGray);
    color: var(--white);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 2px;
    border: 1px solid var(--white);
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  @media (max-width: 768px) {
    width: 100vw;
    .intro-box {
      flex-basis: 80%;
      margin-top: 130px;
      h1 {
        font-size: 4rem;
        line-height: 4rem;
        text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.4);
      }
    }
    .image-box {
      flex-basis: 100%;
      margin: -110vw auto 0vw auto;
    }
    .social-box {
      flex-basis: 100%;
      margin: -120vw 5vw 0vw auto;
      p {
        font-size: 0.6rem;
        font-weight: lighter;
      }
    }
  }
  button {
    background: none;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.4);
  }
`

export default Intro
