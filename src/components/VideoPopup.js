import React from "react";
import { render } from "react-dom";

export default function VideoPopup(props){ 
    return( 
    <div class="POPUPS_ROOT">
      <iframe id="video-1" width="560" height="315" src="https://www.youtube.com/embed/AqS3mq69q4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"  seamless=""></iframe>
      <span href="#" id="videoClose" onClick={props.closeVideo}>X</span>
    </div>)
}