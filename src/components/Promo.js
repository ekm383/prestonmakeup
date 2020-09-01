import React from "react"
import styled from "styled-components"

const Promo = () => {
  return (
    <StyledPromo>
      <div className="container">
        <div className="promo-box">
          <h4>GIMME A BEAT</h4>
          <p>
            SUNDAY, SEPTEMBER 27th 3PM PST
            <br />3 HOUR CLASS
          </p>
        </div>
        <div className="button-box">
          <button>masterclass</button>
        </div>
      </div>
    </StyledPromo>
  )
}

const StyledPromo = styled.div`
  width: 100%;
  height: 300px;
  margin: 0rem auto;
  background: var(--beige);
  display: flex;
  justify-content: center;
  .container {
    width: 80vw;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }
  .promo-box {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--white);
    }
    p {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.5rem;
      color: var(--white);
    }
  }
  .button-box {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
  }
  @media (max-width: 768px) {
    height: 350px;
    .promo-box,
    .button-box {
      flex-basis: 100%;
    }
    .promo-box {
      align-items: flex-start;
    }
    .button-box {
      align-items: flex-start;
    }
  }
`

export default Promo
