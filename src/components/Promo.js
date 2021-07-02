import React from "react"
import styled from "styled-components"

const Promo = () => {
  return (
    <StyledPromo>
      <div className="container" id="events">
        <div className="promo-box">
          <h2>Preston Meneses: Makeup Demo</h2>
          <p>
            <strong>Date & Time:</strong> Thursday, July 29th 6:00pm - 8:00pm
            HST
          </p>
          <p>
            <strong>Location:</strong> 24/7 Danceforce 46-056 Kamehameha Hwy
            Kaneohe, HI 96744
          </p>
          <br />
          <p>
            Watch celebrity makeup artist Preston Meneses demonstrate his makeup
            skills on local musician Ana Vee! Sponsered gift bag valued at $50
            by Cammy Nguyen www.cammynguyen.com. Meet and greet with Preston &
            Ana after the class! Reccomended for ages 14 and over. Located in
            the Windward Mall.
          </p>
        </div>
        <div className="button-box">
          <a href="https://www.eventbrite.com/e/preston-meneses-makeup-demo-with-ana-vee-tickets-161999032467">
            <button>Sign Up</button>
          </a>
        </div>
      </div>
    </StyledPromo>
  )
}

const StyledPromo = styled.div`
  width: 100%;
  height: 300px;
  margin: 0rem auto;
  padding: 5rem 0;
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
    align-items: center;
  }
  .promo-box {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-size: 2rem;
      margin-bottom: 1.4rem;
      color: var(--white);
    }
    p {
      font-size: 0.9rem;
      font-weight: lighter;
      line-height: 1.5rem;
      color: var(--white);
      margin-top: 0.2rem;
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
