import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortPiece from "../components/portPiece"
import ToTopButton from "../components/toTopButton"
import Grid from '@material-ui/core/Grid';

import api from "../api";

const SecondPage = () => {
  const [portWorks, setPort] = useState([{}]);
  const queryDB = async () => {
    const result = await api.getPieces();
    if(result){
      setPort(result.data.reverse());
    }
  }
  useEffect(()=>{
    queryDB();

  },[])

  return (
  <Layout>
    <SEO title="Portfolio" />
    <div className="headerBox">
      <h1 className="subHeader portTitle">Portfolio</h1>
      <p className="indented paragraph">Here are some of the projects I've worked on. Click the titles to view their respective webpages</p>
    </div>
    

    {portWorks.length ? (
      portWorks.map(i => (
        <div className={`slider-${i.id}`} key={i.id}>
          <PortPiece piece={i}/>
        </div>
      ))
    ) : (<p></p>)}
    <ToTopButton/>
  </Layout>
)}

export default SecondPage
