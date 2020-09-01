import React from "react"
import Layout from "../components/layout"
import Banner from "../components/header/Banner"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <Layout>
      <Banner title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
