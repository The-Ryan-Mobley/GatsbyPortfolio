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
    <SEO title="Portfolio" />
    <h1 className="subHeader">Portfolio</h1>

    {portWorks.length ? (
      portWorks.map(i => (
        <div className={`slider-${i.id}`} key={i.id}>
          <PortPiece piece={i}/>
        </div>
      ))
    ) : (<p></p>)}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
