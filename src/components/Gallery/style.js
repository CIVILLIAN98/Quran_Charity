import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 100px auto;
  width: 100%;
  text-align: center;
`;

Container.Photo = styled.img`
  :hover {
    transform: scale(1.2);
    transition: all 1s;
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 1.06),
      0px 7px 46px rgba(0, 0, 0, 1.06), 0px 8px 15px rgba(0, 0, 0, 1.06);
  }
`;
export { Container };
