import React from "react"
import styled from "styled-components"
import Background from "./Background"

const Intro = () => {
  return (
    <StyledIntro>
      <Background className="background">
        <div className="container">
          <div className="intro-box">
            <p>Forming connections through makeup.</p>
            <h1>
              PRESTON <br />
              MAKEUP
            </h1>
          </div>
          <div className="social-box">
            <p>Preston Meneses | Los Angeles, CA</p>
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
      font-size: 8rem;
      line-height: 4.5rem;
    }
    p {
      color: var(--white);
      font-size: 1rem;
      font-weight: lighter;
      margin-bottom: 1rem;
    }
  }
  .social-box {
    display: flex;
    align-items: flex-end;
    color: var(--white);
    padding: 1rem 0rem;
    p {
      font-size: 0.7rem;
      letter-spacing: 1px;
      font-weight: lighter;
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
    border-radius: 10px;
    transition: 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
      background: var(--white);
      border: 1px solid var(--white);
      color: var(--black);
    }
  }
  .pattern {
    height: 150px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0rem auto;
    .container {
      width: 85vw;
      margin: 0rem auto;
      height: 300px;
      padding: 5rem 0rem 3rem 0rem;
    }
    .intro-box {
      flex-basis: 100%;
    }
    .social-box {
      flex-basis: 100%;
    }
    .intro-box h1 {
      font-size: 4rem;
      line-height: 2.3rem;
    }
    .intro-box p {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
    .social-box p {
      align-items: flex-start;
      font-size: 0.8rem;
      margin-right: 1rem;
      padding: 0;
      transform: rotate(0deg);
    }
    .pattern {
      height: 75px;
    }
  }
`

export default Intro
