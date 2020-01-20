import React from "react"
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout"
import "../components/style.css";
import Image from "../components/image";

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bio Page" />
    
    <h1>About Me</h1>
    
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
