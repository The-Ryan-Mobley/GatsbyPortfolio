import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {TitleButton, PortGrid, InfoGrid, RepoGrid} from "./styledComponents";
import CompanyProj from "./companyProj";

import "./style.css";
const ptagElement = {
    'margin' : '0.5em 0',
    'fontSize' : '1.25em'
}
const CompanyPiece = (props) => {
    /**
     * company: 'CPaT Global LLC',
                companyPage: "https://www.cpat.com/",
                companyNumber: "(832) 585-8601",
                companyProjects: [
                    {
                        projectName: "Invent",
                        projectLogo: "../images/CPat-Invent-01-1024x343.png",
                        projectDescription: "",
    
                        accomplishments: [
     */
    useEffect(()=>{
        console.log("COMPANY LOADED",props)

    },[])
    return(
        <Grid item container xs={12} lg={12} justify="center">
            <Grid item container xs={12} lg={12} direction="row" justify="flex-start" alignItems="center">
                
                <img className='company-icon' src={props.props.companyLogo}/>
                <div>
                <p style={ptagElement}><strong>Company:</strong> {props.props.company}</p>
                <p style={ptagElement}><strong>Position:</strong> Software Engineer</p>
                <p style={ptagElement}><strong>From:</strong> February 2020 To: Present</p>
                </div>
                
            </Grid> 

            {props.props.companyProjects ? 
                (
                    props.props.companyProjects.map((proj, index) => (
                        <CompanyProj props={proj} key={`proj - ${index}`}/>
                    ))
                ) 
                :
                (<></>)
            }
        </Grid>
    )
}
export default CompanyPiece;