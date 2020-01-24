import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function PortPiece(props) {
    //need to send to props.url
    //props.repo
    return (
        <div className="portPiece">
            <Grid item container xs={12}>
                <Grid item xs={12} lg={5}>
                    <img src={props.pic} alt="portPic" className="screenShot"/>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <div className="HeaderLink">
                        <Button color="primary"><h1>{props.projectTitle}</h1></Button>
                    </div>
                    <h4><strong>This project was built with: </strong><br/></h4>
                    <p>&#x9 {props.technology}</p>
                </Grid>
                <Grid item xs={12}>
                    <p class="portfolio-summary"><strong>Summary: </strong><br/>{props.projectDescription}</p>
                    <Button color="primary"><strong>Github repo</strong></Button>
                </Grid>
            </Grid>
        </div>
    )
}
