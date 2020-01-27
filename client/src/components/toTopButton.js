import React from 'react';
import Button from '@material-ui/core/Button';
import {BlueButton} from "./styledComponents"

export default function ToTopButton(){
    const top = () => {
        window.scrollTo(0,0);
    }
    return (
        <div className="topButton">
            <BlueButton variant="contained" color="primary" onClick={top}>Back to Top</BlueButton>
        </div>
    )
}