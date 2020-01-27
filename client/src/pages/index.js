import React from "react"
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import "../components/style.css";

import SEO from "../components/seo"
import "../components/style.css";
import profilePic from "../images/20190822_141852.jpg";
import linkedInLogo from "../images/5a22d420c9a5a7.416105621512231968826.png";
import gitHubLogo from "../images/github.png";
import resumeLogo from "../images/document-icon-36561.png";
import ToTopButton from "../components/toTopButton"
import Text from "../components/text";

const IndexPage = () => (
  <Layout>
    <SEO title="Bio Page" />
    <Grid container>
      <Grid item xs={12}>
        
      </Grid>
      <div className="pageBody">
        <Grid item xs={12}>
          <h1 className="subHeader title">About Me</h1>
            <img src={profilePic} alt="profile" className="profile-pic"/>
          <div className="spacer"></div>
          <p className="indented paragraph fader-0">
            Hello and welcome to my website! I am a Full-Stack developer with a
            certificate in Full Stack Web Development from the University of
            Texas Austin Coding Bootcamp. I am skilled in both backend 
            development specializing in Nodejs, and frontend javascript with
            React. I am a detail oriented-problem solver, I work very well
            under stressful situations; while maintaining enough of my sense of
            humor to collaborate with a team in a productive and friendly
            manner. Whenever I work with a team if i'm not leading the project’s
            design, I am the workhorse guaranteeing it’s deployment.<br/></p>
          <p className="paragraph indented fader-1">
            I've loved computers all my life. My hope is that I can give back to the world of programming. I also love to 
            create, and one of my greatest joys in life is the freedom, and infinite possibilities that have been opened up 
            to me thanks to my ability to code. In my time as a developer I have been able to work on a myriad of
            projects with a plethora of technologies, and creative directions. It is my hope that I can bring that same
            spark, and sense of wonder that has drawn me to this field throughout my personal life into my professional
            career. Some of my strengths include: Database management with both SQL and no SQL databases adhering
            to the MVC design pattern. Building powerful and dynamic webpages with React and Redux. Designing responsive page
            layouts using CSS and a variety of frameworks such as: Bootstrap, Materialize, and Material
            UI. Don't just take my word for it! Feel free to look at the list of projects I've worked on by clicking the portfolio link above.<br/></p>
          <p className="paragraph fader-2">
          <strong className="subHeader">Specialized In: </strong><br/>
                    Javascript, JQuery, Node.js, Express, React.js, Redux.js, SocketIo, CSS ,HTML, MYSQL, 
                    MongoDB.<br/>
                    <strong>Feel free to call or email me at:</strong><br/>
                    832-712-2803<br/>
                    <a href = "mailto: ryan.mobley94@gmai.com">ryan.mobley94@gmail.com</a>
          </p>
            
        </Grid>
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
      </div>
    </Grid>
    <ToTopButton/>
    
  </Layout>
)

export default IndexPage
