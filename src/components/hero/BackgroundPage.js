import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "preston-makeup-01.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.hero.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
