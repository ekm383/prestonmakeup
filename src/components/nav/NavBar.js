import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Burger from "./Burger"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Nav>
      <div className="box" key={data.logo}>
        <Link to="/">
          <Img
            className="logo"
            fluid={data.logo.childImageSharp.fluid}
            alt="logo"
          />
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  margin: 0rem auto;
  padding: 1rem;
  background: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box {
    width: 60px;
  }
  @media (max-width: 768px) {
    margin: 0rem auto;
  }
`

export default NavBar
