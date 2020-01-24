import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import api from "../api";

const SecondPage = () => {
  const queryDB = async () => {
    const result = await api.getPieces();
    if(result){
      console.log(result.data)
    }
  }
  useEffect(()=>{
    queryDB();

  },[])

  return (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
