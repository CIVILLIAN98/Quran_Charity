import React from "react";
import { Container } from "./style";
import galImg01 from "../../assets/imgs/Gallery_img01.png";
import galImg02 from "../../assets/imgs/Gallery_img02.png";
import galImg03 from "../../assets/imgs/Gallery_img03.png";
import galImg04 from "../../assets/imgs/Gallery_img04.png";
import galImg05 from "../../assets/imgs/Gallery_img05.png";
import galImg06 from "../../assets/imgs/Gallery_img06.png";
export const Gallery = () => {
  return (
    <Container>
      <Container.Photo className="a" src={galImg01} alt="GalleryIMG" />

      <Container.Photo className="b" src={galImg02} alt="GalleryIMG" />

      <Container.Photo className="c" src={galImg03} alt="GalleryIMG" />

      <Container.Photo className="d" src={galImg04} alt="GalleryIMG" />

      <Container.Photo className="e" src={galImg05} alt="GalleryIMG" />

      <Container.Photo className="f" src={galImg06} alt="GalleryIMG" />
    </Container>
  );
};
