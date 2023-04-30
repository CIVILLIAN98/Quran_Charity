import styled from "styled-components";

const Container = styled.div`
  background: transparent;
  width: 332px;
  height: 196px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
  background: #ffffff;
  border-radius: 3px;
  position: relative;
  margin: 100px;
  background: #fcfcfc;
  box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 55px 15px;
`;

Container.Ava = styled.img`
  position: absolute;
  width: 82px;
  height: 82px;
  top: -35px;
  left: 120px;
  border-radius: 50%;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

Container.Comment = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0d263b;
`;

export { Container, Name };
