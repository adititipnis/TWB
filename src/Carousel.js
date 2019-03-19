import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel showStatus={false} infiniteLoop showThumbs={false} autoPlay>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/1" />
    </div>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/2" />
    </div>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/3" />
    </div>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/4" />
    </div>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/5" />
    </div>
    <div>
      <img src="http://lorempixel.com/800/600/nightlife/6" />
    </div>
    </Carousel>
);
