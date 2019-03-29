import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as Carousel from "react-responsive-carousel";
const image1 = require("../images/1.jpg");
const image2 = require("../images/2.jpg");
const image3 = require("../images/3.png");

export class HeroCarousel extends Component {
  render() {
    return (
      <Carousel.Carousel autoplay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
      </Carousel.Carousel>
    );
  }
}
