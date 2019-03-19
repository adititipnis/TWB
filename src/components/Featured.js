import React from "react";

export default function Featured(props) {
    return (
        <span><img className="click-1" src={props.src} onClick={props.open}></img></span>
    )    
}