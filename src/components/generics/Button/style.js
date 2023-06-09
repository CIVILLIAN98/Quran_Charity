import styled from "styled-components";

const GetType = ({ type }) => {
  switch (type) {
    case "dark": {
      return {
        background: "transparent",
        color: "#38404C;",
        border: "2px solid #04402C",
        "border-radius": "8px",
      };
    }
    case "light": {
      return {
        background: "transparent",
        color: "black",
        border: "1px solid #E6E9EC",
      };
    }
    case "blue": {
      return {
        background: "#0061DF",
        color: "#ffff",
        border: "1px solid #0061DF",
      };
    }

    default:
      return {
        background: "#fffff",
        color: "black",
        border: "1px solid rgba(255, 255, 255, 1)",
      };
  }
};

const Container = styled.button`
  cursor: pointer;
  min-width: 120px;
  height: 44px;
  padding: 12px 40px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ fs }) => (fs ? `${fs}` : "14px")};
  line-height: 20px;
  ${GetType};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  margin-top: ${({ mt }) => (mt ? `${mt}` : 0)};
  :active {
    transform: scale(0.9);
  }
  height: ${({ height }) => (height ? `${height}` : "44px")};
  width: ${({ width }) => (width ? `${width}` : "131px")};
  background: ${({ css }) => (css ? `#0061df` : "")};
  color: ${({ css }) => (css ? `white` : ``)};
  :hover {
    background-color: "blue";
    color: "white";
  }
`;

export { Container };
