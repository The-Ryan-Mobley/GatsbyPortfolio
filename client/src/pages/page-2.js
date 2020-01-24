import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortPiece from "../components/portPiece"

import api from "../api";

const SecondPage = () => {
  const [portWorks, setPort] = useState([{}]);
  const queryDB = async () => {
    const result = await api.getPieces();
    if(result){
      setPort(result.data);
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
    {portWorks.length ? (
      portWorks.map(i => (
        <PortPiece props={i} key={i.id}/>
      ))
    ) : (<p></p>)}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
