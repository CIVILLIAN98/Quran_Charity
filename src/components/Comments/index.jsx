import React from "react";
import Slider from "react-slick";
import { Item } from "./style";
import CommentsCard from "../CommentsCard";
import { comments } from "../../utils/comments";

export default function CommentsCarousel() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    centerMode: true,
    className: "carouselItem",
  };
  return (
    <Slider {...settings}>
      {comments.map((val) => {
        return (
          <Item key={val.id}>
            <CommentsCard name={val.name} comment={val.comment} img={val.img} />
          </Item>
        );
      })}
    </Slider>
  );
}
