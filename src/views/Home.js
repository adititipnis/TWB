import React from "react";
import FeaturedSection from '../components/FeaturedSection'
import WorldMap from '../components/WorldMap'
import { Link } from 'react-router-dom'


const serviceImage1 = require('../images/service-1.png')
const serviceImage2 = require('../images/service-2.png')
const serviceImage3 = require('../images/service-3.png')
const serviceImage4 = require('../images/service-4.png')

export default class Home extends React.Component {
    showVideo = () => this.setState({ isVideoVisible: true })

    hideVideo = () => this.setState({ isVideoVisible: false })

    render() {
        return (
            <div>
                <div className="servicesSection">
                    <div className="service"><img src={serviceImage1}></img><span>VIDEO PRODUCTION</span></div>
                    <Link to="/music"><div className="service"><img src={serviceImage2}></img><span>MUSIC PRODUCTION</span></div></Link>
                    <div className="service"><img src={serviceImage3}></img><span>EVENT COVERAGE</span></div>
                    <div className="service"><img src={serviceImage4}></img><span>TECH COMMUNICATION</span></div>
                </div>
                <FeaturedSection />
                <WorldMap className="clientsMap" />
            </div>
        )
    }
}