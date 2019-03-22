import React from "react";

export default function MobileNav(props) {
    return (
        <div className="mobileNavOverlay">
            <ul className="mobileNavOverlay-content">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>OUR WORK</li>
                <li>CONTACT</li>
            </ul>
            <span class="closebtn" onClick={props.close}>x</span>
        </div>)
}