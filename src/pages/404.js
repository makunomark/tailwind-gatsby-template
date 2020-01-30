import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl">NOT FOUND</h1>
      <p className="text-xl text-gray-700">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
