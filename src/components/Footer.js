import React from "react"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p> &#169; Copyright 2020 Preston Makeup</p>
        <a href="https://www.instagram.com/prestonmakeup/">
          <FaInstagram />
        </a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  width: 100%;
  margin: 0rem auto;
  background: black;
  padding: 3rem 0rem;
  div {
    width: 80%;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 0.6rem;
      font-weight: lighter;
    }
    a {
      svg {
        font-size: 1.5rem;
        margin-bottom: -0.4rem;
      }
      color: var(--white);
      &:hover {
        color: var(--lightGray);
      }
    }
  }
`

export default Footer
