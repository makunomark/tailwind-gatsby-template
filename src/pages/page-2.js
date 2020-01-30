import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl">Hi from the second page</h1>
      <p className="text-xl text-gray-700">Welcome to page 2</p>
      <Link to="/" className="my-6 text-blue-700">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
