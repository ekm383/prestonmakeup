import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import About from "../components/About"
import Promo from "../components/Promo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Promo />
  </Layout>
)

export default IndexPage
