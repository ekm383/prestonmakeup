import React from "react"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"
import Background from "./Background"

const Intro = () => {
  return (
    <StyledIntro>
      <Background className="background">
        <div className="container">
          <div className="intro-box">
            <p>welcome to</p>
            <h1>
              PRESTON <br />
              MAKEUP
            </h1>
            <button>masterclass</button>
          </div>
          <div className="social-box">
            <p>
              Preston Meneses <FaInstagram />
            </p>
          </div>
        </div>
      </Background>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  .container {
    width: 80vw;
    height: 400px;
    margin: 0 auto;
    padding: 4rem 0rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .intro-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: var(--white);
      font-size: 7rem;
      line-height: 6rem;
    }
    p {
      color: var(--white);
      font-size: 1rem;
      font-weight: lighter;
    }
  }
  .social-box {
    display: flex;
    align-items: flex-end;
    color: var(--white);
    padding: 1rem 0rem;
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
    width: 200px;
    margin: 2rem 0rem;
    padding: 1rem 2rem;
    background: none;
    color: var(--white);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 2px;
    border: 1px solid var(--white);
    transition: 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
      background: var(--white);
      border: 1px solid var(--white);
      color: var(--black);
    }
  }
  @media (max-width: 768px) {
    .container {
      height: 300px;
      padding: 4rem 0rem 4rem 0rem;
    }
    .intro-box {
      flex-basis: 100%;
    }
    .social-box {
      flex-basis: 100%;
    }
    .intro-box h1 {
      font-size: 4rem;
      line-height: 3.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .social-box p {
      align-items: flex-start;
      font-size: 0.8rem;
      margin-right: 1rem;
      padding: 0;
    }
    button {
    }
  }
`

export default Intro
