import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as Carousel from "react-responsive-carousel";
const image1 = require("../images/1.jpg");
const image2 = require("../images/2.jpg");
// const image3 = require("../images/3.png");

export class HeroCarousel extends Component {
  render() {
    return (
      <Carousel.Carousel autoplay={true}>
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        {/* <div>
          <img src={image3} />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel.Carousel>
    );
  }
}
