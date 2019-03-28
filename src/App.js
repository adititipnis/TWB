import React from "react";
import ReactDOM, { render } from "react-dom";
import BackgroundSlider from 'react-background-slider'
import MobileNav from './components/MobileNav'
import { Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroCarousel } from './components/HeroCarousel'
import Home from './views/Home'
import Music from './views/Music'
import Contact from './views/Contact'
const image1 = require('./images/1.jpg')
const image2 = require('./images/2.jpg')
const image3 = require('./images/3.png')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMobileNavVisible: false }
  }

  onMainScroll = () => {
    const newScrollHeight = Math.ceil(ReactDOM.findDOMNode(this).scrollTop / 50) * 50;
    if (this.state.currentScrollHeight != newScrollHeight) {
      this.setState({ currentScrollHeight: newScrollHeight })
    }
  }

  toggleMobileNav = () => this.setState({ isMobileNavVisible: !this.state.isMobileNavVisible })

  hideMobileNav = () => this.setState({ isMobileNavVisible: false })

  render() {
    const navClassName = this.state.currentScrollHeight > 500 ? 'navbar-fixed-top navbar-fixed-top-black' : 'navbar-fixed-top'
    return (<div className="mainContainer" onScroll={this.onMainScroll}>
      <BackgroundSlider onscroll={this.backgroundScrolled} images={[image3, image2, image1]}
        duration={3} transition={2} />
      {/* <HeroCarousel /> */}
      <nav id="navigation" className={navClassName}>
        <ul className="navigation-wide">
          <Link to="/#hello"><li>HOME</li></Link>
          <Link to="/#services"><li>SERVICES</li></Link>
          <Link to="/#ourwork"><li>OUR WORK</li></Link>
          <Link to="/contact#contactSection"><li>CONTACT</li></Link>
        </ul>
        <a className="navigation-narrow" onClick={this.toggleMobileNav}>&#9776;</a>
      </nav>
      {this.state.isMobileNavVisible && <MobileNav close={this.hideMobileNav} />}

      <div className="pageContent">
        <Route path="/" exact component={Home} />
        <Route path="/music" exact component={Music} />
        <Route path="/contact" component={Contact} />
      </div>

      <div className="footer">
        <div className="social-media-icons" >
          <ul className="list-inline col-xs-12">
            <a href="#"><i className="fa fa-google-plus-square fa-5x"></i></a>
            <a href="#"><i className="fa fa-twitter-square fa-5x"></i></a>
            <a href="#"><i className="fa fa-youtube-square fa-5x"></i></a>
            <a href="#"><i className="fa fa-rss-square fa-5x"></i></a>
          </ul>
        </div>
      </div>
    </div>)
  }
}
