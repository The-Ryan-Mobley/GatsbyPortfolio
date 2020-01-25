import React, { useState, useEffect} from "react";

export default function Text(props){
    const [pText, alterText] = useState("");
    useEffect(()=>{
        const pArray = props.paragraph.split(" ");
        

    },[])
    return(
        <p className="paragraph">{pText}</p>
    )
}