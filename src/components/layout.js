import React from "react"
import PropTypes from "prop-types"
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
