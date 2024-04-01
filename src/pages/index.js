import React from "react"
import {useState, useEffect} from "react"
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
import {PageBodyGrid} from "../components/styledComponents"

const IndexPage = () => {
  const [profileImage, setProfileImage] = useState("");
  useEffect(()=>{
    setProfileImage(profilePic)

  },[])
  return (profileImage.length ?
  <Layout>
   <SEO title="Bio Page" author="Ryan Mobley"/>
    <Container maxWidthXl>

      <div className="pageBody">
        <PageBodyGrid item xs={12}>
          <h1 className="subHeader title">About Me</h1>
            <img src={profileImage} loading="eager" alt="profile" className="profile-pic fader-1"/>
          <div className="spacer"></div>
          <p className="indented paragraph fader-0">
          Armed with four years of industry experience as a full-stack web developer, 
          I stand ready to tackle any challenge with confidence and expertise. 
          My proficiency spans an extensive range of technologies, 
          encompassing JavaScript, jQuery, Node.js, Express, React.js, Redux.js, among others.
          <br></br> 
          Whether it's building intuitive user interfaces or designing scalable backend systems, 
          I approach each project with a blend of creativity and technical precision. 
          I possess a keen eye for detail and a deep-seated passion for data-driven design, 
          allowing me to create solutions that seamlessly integrate form and function. 
          <br></br>
          My expertise extends to database management systems such as MySQL, SQL Server, and MongoDB, 
          complemented by a strong understanding of C#, MVC Razor, and the Angular framework. 
          What sets me apart is not just my proficiency in these technologies, but also my 
          unwavering commitment to versatility and continuous learning. 
          I thrive in dynamic environments where innovation is paramount, 
          constantly expanding my skill set to adapt to evolving industry trends and deliver 
          exceptional results.
            {/* intro here */}
            <br/>

            </p>
          <p className="paragraph indented fader-2">
            {/* talk about qualifications and acomplishments */}
            
            <br/></p>
            <p className="paragaraph indented fader-3">
            
            </p>
          <p className="paragraph indented fader-4">
          <strong className="subHeader">Specialized In: </strong><br/>
                    Javascript, JQuery, Node.js, Express, React.js, Redux.js,Angular.js,NX.js, WebSockets, CSS ,HTML, MYSQL, 
                    MongoDB, c#,ASP.net,.net core,MVC Razor Pages, AWS EC2 cloud server hosting.<br/>
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
        </PageBodyGrid>
      </div>
    </Container>
    <ToTopButton/>
    
  </Layout>
  : <></>)
}

export default IndexPage
