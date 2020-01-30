import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-white h-screen flex justify-center items-center flex-col">
      <div className="w-32 relative pb-4">
        <Image />
      </div>
      <div className="w-full max-w-md bg-gray-100 rounded-lg">
        <form action="" className="px-4 py-4 flex flex-col pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold mb-1">
              Email Address
              </label>
            <input
              type="email"
              name="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none border-purple-300 "
              placeholder="Johnbull@example.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              name="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none border-purple-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none w-1/3 mx-4 mt-2"
            type="button"
          >
            Sign In
            </button>
        </form>
      </div>
      <Link to="/page-2/" className="pt-4">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
