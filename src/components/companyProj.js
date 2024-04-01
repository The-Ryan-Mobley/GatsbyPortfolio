import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {TitleButton, PortGrid, InfoGrid, RepoGrid} from "./styledComponents";


import "./style.css";
const titleStyle = {
    'fontWeight': "bold",
    'fontSize' : "1.25em",
    'paddingRight' : '1em'
}


const CompanyProj = (props) => {
    useEffect(()=>{
        console.log("PEICE LOADED BABYYYYY",props)
        console.log(props.props.projectName)
    },[])
    return(
        <Grid item container xs={12} lg={12} justify="flex-start" alignItems="center">
            <img className='company-icon' src={props.props.projectLogo}/>

            <p style={titleStyle}>{`- ${props.props.projectName}`}</p>
            <p>{props.props.projectDescription}</p>
        </Grid>
    )
}
export default CompanyProj;