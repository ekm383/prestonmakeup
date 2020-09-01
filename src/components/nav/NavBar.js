import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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
        <Img
          className="logo"
          fluid={data.logo.childImageSharp.fluid}
          alt="logo"
        />
      </div>

      <Burger />
    </Nav>
  )
}

const Nav = styled.nav`
  width: 95vw;
  margin: 1rem auto 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box {
    width: 60px;
  }
  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`

export default NavBar
