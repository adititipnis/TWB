import React from "react";
import { render } from "react-dom";
import BackgroundSlider from 'react-background-slider'
import VideoPopup from './components/VideoPopup'

const image1 = require('./images/1.jpg')
const image2 = require('./images/2.jpg')

const featuredImage1 = require('./images/featured-1.jpg')
const featuredImage2 = require('./images/featured-2.jpg')
const featuredImage3 = require('./images/featured-3.jpg')
const featuredImage4 = require('./images/featured-4.jpg')

const serviceImage1 = require('./images/service-1.png')
const serviceImage2 = require('./images/service-2.png')
const serviceImage3 = require('./images/service-3.png')
const serviceImage4 = require('./images/service-4.png')

let videoPopup = null

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isVideoVisible: false}
  }

  componentDidMount() {
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      if (this.state.currentScrollHeight != newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.backgroundScrolled);
  }

  showVideo = () => this.setState({ isVideoVisible: true })

  hideVideo = () => this.setState({ isVideoVisible: false })

  render() {
  const navClassName = this.state.currentScrollHeight > 500 ? 'navbar-fixed-top navbar-fixed-top-black' : 'navbar-fixed-top'
  console.log(this.state.currentScrollHeight)
  return (<div>
    <BackgroundSlider onscroll={this.backgroundScrolled}
  images={[image1, image2]}
  duration={3} transition={2} />
  {this.state.isVideoVisible && <VideoPopup closeVideo={this.hideVideo} />}
  <nav id="navigation" className={navClassName}>	
    <ul>
      <li>HOME</li>
      <li>SERVICES</li>
      <li>OUR WORK</li>
      <li>CONTACT</li>
    </ul>
    </nav>
    <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', marginTop: '100vh', backgroundColor: 'black'}}>
      <div className="service"><img src={serviceImage1}></img><span>VIDEO PRODUCTION</span></div>
      <div className="service"><img src={serviceImage2}></img><span>MUSIC PRODUCTION</span></div>
      <div className="service"><img src={serviceImage3}></img><span>EVENT COVERAGE</span></div>
      <div className="service"><img src={serviceImage4}></img><span>TECH COMMUNICATION</span></div>
    </div>
<div style={{marginTop: '30vh', }}>
    <div className="featuredStrip">
      <span><img className="click-1" src={featuredImage1} onClick={this.showVideo}></img></span>
      <span><img className="click-1" src={featuredImage2}></img></span>
      <span><img className="click-1" src={featuredImage3}></img></span>
      <span><img className="click-1" src={featuredImage4}></img></span>
    </div>
    <div className="featuredStrip">
    <span><img className="click-1" src={featuredImage3}></img></span>
      <span><img className="click-1" src={featuredImage4}></img></span>
      <span><img className="click-1" src={featuredImage1}></img></span>
      <span><img className="click-1" src={featuredImage2}></img></span>
    </div>
    <div className="featuredStrip">
      <span><img className="click-1" src={featuredImage1}></img></span>
      <span><img className="click-1" src={featuredImage2}></img></span>
      <span><img className="click-1" src={featuredImage3}></img></span>
      <span><img className="click-1" src={featuredImage4}></img></span>
    </div>
    <div className="featuredStrip">
    <span><img className="click-1" src={featuredImage3}></img></span>
      <span><img className="click-1" src={featuredImage4}></img></span>
      <span><img className="click-1" src={featuredImage1}></img></span>
      <span><img className="click-1" src={featuredImage2}></img></span>
    </div>
    </div>

    <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', backgroundColor: 'black', height:'30vh'}}>
    <div class="social-media-icons" >
    <ul class="list-inline col-xs-12">
              <a href="#"><i class="fa fa-google-plus-square fa-5x"></i></a>
              <a href="#"><i class="fa fa-twitter-square fa-5x"></i></a>
              <a href="#"><i class="fa fa-youtube-square fa-5x"></i></a>
              <a href="#"><i class="fa fa-rss-square fa-5x"></i></a>               
            </ul>
    </div>
    </div>
  </div>)
  }
}

render(<App />, document.getElementById("root"));
