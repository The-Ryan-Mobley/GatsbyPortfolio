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
            Hello and welcome to my website! I am a Full-Stack developer with 2 years experience and a
            certificate in Full Stack Web Development from the University of
            Texas Austin Coding Bootcamp 
            {/* intro here */}
            <br/>

            </p>
          <p className="paragraph indented fader-2">
            {/* talk about qualifications and acomplishments */}
            'm baby deep v craft beer 3 wolf moon bespoke, edison bulb portland 
            fingerstache put a bird on it selfies. Seitan kogi activated charcoal 
            vexillologist kickstarter subway tile fam succulents four dollar toast
             roof party snackwave. Tousled 90's copper mug kickstarter. 
             Fam thundercats vape distillery biodiesel butcher mumblecore knausgaard 
             cronut retro vegan. Pitchfork health goth neutra listicle tilde 
             meditation, mixtape chartreuse cardigan tumblr hoodie intelligentsia 
             chicharrones chillwave.
            <br/></p>
            <p className="paragaraph indented fader-3">
            Shabby chic hot chicken fanny pack subway tile occupy marfa 
            sartorial deep v tacos vinyl bushwick. Jianbing yr cliche 
            eadymade normcore, ugh vexillologist disrupt chartreuse.
             Woke kombucha plaid yr tilde, pop-up pug pickled ramps portland 
             cray deep v vexillologist offal banjo. Humblebrag palo santo 
             meditation vape af air plant. Crucifix poutine VHS, adaptogen 
             jianbing cliche +1 palo santo YOLO shoreditch franzen iPhone 
             small batch. Scenester kickstarter meditation kitsch organic, 
             blog +1 farm-to-table.
            </p>
          <p className="paragraph indented fader-4">
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
        </PageBodyGrid>
      </div>
    </Container>
    <ToTopButton/>
    
  </Layout>
  : <></>)
}

export default IndexPage
