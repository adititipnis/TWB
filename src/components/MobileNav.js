import React from "react";
import { HashLink as Link } from 'react-router-hash-link'

export default function MobileNav(props) {
    return (
        <div className="mobileNavOverlay">
            <ul className="mobileNavOverlay-content">
                <Link to="/" onClick={props.close}><li>HOME</li></Link>
                <Link to="/" onClick={props.close}><li>SERVICES</li></Link>
                <Link to="/" onClick={props.close}><li>OUR WORK</li></Link>
                <Link to="/contact#contactSection" onClick={props.close}><li>CONTACT</li></Link>
            </ul>
            <span class="closebtn" onClick={props.close}>x</span>
        </div>)
}