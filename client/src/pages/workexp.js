import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortPiece from "../components/portPiece"
import ToTopButton from "../components/toTopButton"
import Grid from '@material-ui/core/Grid';
import "../components/style.css";
import Container from '@material-ui/core/Container';

import SEO from "../components/seo"
import "../components/style.css";
import profilePic from "../images/20190822_141852.jpg";
import linkedInLogo from "../images/5a22d420c9a5a7.416105621512231968826.png";
import gitHubLogo from "../images/github.png";
import resumeLogo from "../images/document-icon-36561.png";
import ToTopButton from "../components/toTopButton";
import {pageBodyGrid} from "../components/styledComponents";

const workExp = () => {
    return(
    <Layout>
        <SEO title="Work Experience" />
        <div className="pageBody">
        <pageBodyGrid item xs={12}>
            <h1>OH MAN</h1>
        </pageBodyGrid>
        </div>
    </Layout>)
}

export default workExp;