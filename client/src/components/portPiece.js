import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {TitleButton, PortGrid, InfoGrid, RepoGrid} from "./styledComponents";

import "./style.css";

export default function PortPiece(props) {
    //huh
    //need to send to piece.url
    //piece.repo
    return (
            <PortGrid item container xs={12}>
                <Grid item container xs={12} lg={5} justify="center">
                    <img src={`${props.piece.pic}`} alt="portPic" className="screenShot"/>
                </Grid>
                <InfoGrid item xs={12} lg={6}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <TitleButton href={props.piece.url} color="primary">{props.piece.projectTitle}</TitleButton>
                    </Grid>
                    
                    <p><strong>This project was built with: </strong><br/>  {'\t'}{`${props.piece.technology}`}</p>
                </InfoGrid>
                <Grid item xs={12}>
                    <p class="portfolio-summary"><strong>Summary: </strong><br/>{props.piece.projectDescription}</p>
                    <RepoGrid item container xs={12} direction="row-reverse">
                        <Button color="primary" href={props.piece.repo}><strong>Github repo</strong></Button>
                    </RepoGrid>
                </Grid>
            </PortGrid>
    )
}
