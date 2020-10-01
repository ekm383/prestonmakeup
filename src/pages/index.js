import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About
      content="Preston Meneses is one of the most sought-after celebrity makeup artists working today. His artistry has emerged throughout his 15-year collaboration with the legendary music superstar Janet Jackson, as well as working with celebrities Rihanna, Kelis, Erica Jayne, Brooklyn Decker, Halle Berry, Carmen Electra, Kim Kardashian, and Courtney Love, just to name a few. He was showcased on television with appearances in episodes of “The Real Housewives of Beverly Hills” and working on “Dance Moms.” His talents have graced the pages of countless magazines, including Vogue, Vogue Italia, Harpers Bazar, Harpers Arabia, Essence, InStyle Magazine, FHM, Maxim and numerous billboards in New York’s Times Square.
"
    />
  </Layout>
)

export default IndexPage
