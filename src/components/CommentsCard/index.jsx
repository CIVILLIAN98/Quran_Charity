import React from "react";
import { Container, Name } from "./style";
import person from "../../assets/imgs/noob1.png";

const CommentsCard = ({ name, comment, img }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Container.Ava src={img || person} alt="asd" width={38} height={38} />
      <Container.Comment>{comment || "Marvin McKinney"}</Container.Comment>
    </Container>
  );
};
export default CommentsCard;
