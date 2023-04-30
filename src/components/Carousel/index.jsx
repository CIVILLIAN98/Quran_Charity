import React from "react";
import Slider from "react-slick";
import { Item } from "./style";
import { Card } from "../Card";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 0,
    arrows: true,
    accessibility: true,
    centerMode: true,
    className: "carouselItem",
  };
  return (
    <Slider {...settings}>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
      <Item>
        <Card />
      </Item>
    </Slider>
  );
}
