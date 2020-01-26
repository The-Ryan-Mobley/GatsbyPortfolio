import React, { useState, useEffect} from "react";

export default function Text(props){
    let pText="";
    useEffect(()=>{

        let pArray = props.paragraph.split(" ");
        pArray.forEach(paragraphIndex => {
            setInterval(() => {
                let typedText = [];
                if(pText.length > 0){
                    typedText = pText.split(" ");
                }
                console.log(typedText);
                pText = typedText.push(paragraphIndex).join(" ");
            }, 100);
        });

    },[])
    return(
        <p className="paragraph">{pText}</p>
    )
}