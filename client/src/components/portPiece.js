import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {TitleButton, PortGrid} from "./styledComponents";

import "./style.css";

export default function PortPiece(props) {
    //huh
    //need to send to piece.url
    //piece.repo
    return (
            <PortGrid item container xs={12}>
                <Grid item xs={12} lg={5}>
                    <img src={props.piece.pic} alt="portPic" className="screenShot"/>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <div className="HeaderLink">
                        <TitleButton color="primary">{props.piece.projectTitle}</TitleButton>
                    </div>
                    <h4><strong>This project was built with: </strong><br/></h4>
                    <p> {`\t ${props.piece.technology}`}</p>
                </Grid>
                <Grid item xs={12}>
                    <p class="portfolio-summary"><strong>Summary: </strong><br/>{props.piece.projectDescription}</p>
                    <Grid item container xs={12} direction="row-reverse">
                        <Button color="primary"><strong>Github repo</strong></Button>
                    </Grid>
                </Grid>
            </PortGrid>
    )
}
