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
                <div className="section">
                    <h3>Hello!</h3>

                    We're a small team of passionate musicians/filmmakers in Mumbai that have shot over 600 music videos for artists big and small all over the world to help them gain more fans, and book more shows. Take a look at our music video productions from 2018 below!
                </div>
                <div className="servicesSection">
                    <Link to="/music"><div className="service"><img src={serviceImage1}></img><span>VIDEO PRODUCTION</span></div></Link>
                    <Link to="/music"><div className="service"><img src={serviceImage2}></img><span>MUSIC PRODUCTION</span></div></Link>
                    <Link to="/music"><div className="service"><img src={serviceImage3}></img><span>EVENT COVERAGE</span></div></Link>
                    <Link to="/music"><div className="service"><img src={serviceImage4}></img><span>TECH COMMUNICATION</span></div></Link>
                </div>
                <FeaturedSection />
                <WorldMap className="clientsMap" />
            </div>
        )
    }
}