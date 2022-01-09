import React from "react"
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import "../components/style.css";
import Container from '@material-ui/core/Container';

import SEO from "../components/seo"
import "../components/style.css";
import profilePic from "../images/20190822_141852.jpg";
import linkedInLogo from "../images/5a22d420c9a5a7.416105621512231968826.png";
import gitHubLogo from "../images/github.png";
import resumeLogo from "../images/document-icon-36561.png";
import ToTopButton from "../components/toTopButton";
import {pageBodyGrid} from "../components/styledComponents"

const IndexPage = () => (
  <Layout>
    <SEO title="Bio Page" author="Ryan Mobley"/>
    <Container maxWidthXl>

      <div className="pageBody">
        <pageBodyGrid item xs={12}>
          <h1 className="subHeader title">About Me</h1>
            <img src={profilePic} alt="profile" className="profile-pic"/>
          <div className="spacer"></div>
          <p className="indented paragraph fader-0">
            Hello and welcome to my website! I am a Full-Stack developer with a
            certificate in Full Stack Web Development from the University of
            Texas Austin Coding Bootcamp 
            {/* intro here */}
            <br/></p>
          <p className="paragraph indented .fader-1">
            {/* talk about qualifications and acomplishments */}
            <br/></p>
          <p className="paragraph fader-2">
          <strong className="subHeader">Specialized In: </strong><br/>
                    Javascript, JQuery, Node.js, Express, React.js, Redux.js, WebSockets, CSS ,HTML, MYSQL, 
                    MongoDB.<br/>
                    <strong>My Contact info:</strong><br/>
                    832-712-2803<br/>
                    <a href = "mailto: ryan.mobley94@gmai.com">ryan.mobley94@gmail.com</a>
          </p>
            
        <Grid item container xs={12} direction="row" justify="flex-start">
          <Grid item xs={12}>
            <p className="subHeader fader-3"><strong>Links to my Social Media and Resume</strong></p>
          </Grid>
          <a href="https://github.com/The-Ryan-Mobley" className="smallBox fader-4" id="firstbox">
            <img className="linkBox" id="github" src={gitHubLogo} alt="mygithub"/>
          </a>
          <a href="https://www.linkedin.com/in/ryan-mobley-b843b5186/" className="smallBox fader-5">
            <img className="linkBox" id="linked-in" src={linkedInLogo} alt="ln"/>
          </a>
          <a href="https://docs.google.com/document/d/1z2_zsn50VmR_pMpnk31xw3CZBzamcT8U8RyGtp9Ezr4/edit?usp=sharing"
            className="smallBox fader-6">
              <img className="linkBox" id="resume" src={resumeLogo} alt="resume"/>
          </a>
        </Grid>
        </pageBodyGrid>
      </div>
    </Container>
    <ToTopButton/>
    
  </Layout>
)

export default IndexPage
