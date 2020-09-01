import React from "react"
import styled from "styled-components"

const Promo = () => {
  return (
    <StyledPromo>
      <div className="container">
        <div className="promo-box">
          <h4>GIVE ME A BEAT</h4>
          <p>Sunday, September 27th 3:00pm PST</p>
          <p>
            Preston will demonstrate his sculpting, highlighting, makeup
            placement, and couture glam along with products he uses.
          </p>
        </div>
        <div className="button-box">
          <a href="https://us02web.zoom.us/webinar/register/WN_XDTMKQZwRYuso4HXvyHvSQ">
            <button>masterclass</button>
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
