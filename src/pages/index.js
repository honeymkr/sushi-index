import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Time to learn Sushi!</h1>
    <p>Welcome to 'The Index'.</p>
    <p>Whether you are a restaurant manager or empolyee who needs the fastest way to becoming an expert in Sushi, you've come to the right place!
      Below are a couple likns to get you started:.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/fish/">Sushi Index</Link> <br />
      <Link to="/quiz/">Test your Sushi knowledge</Link> <br />
      <Link to="/about">More about us!</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
