import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Wrapper.Logo = styled.img`
  width: 89px;
  height: 92px;
`;
Wrapper.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
Wrapper.Btn = styled.button`
  width: 131px;
  height: 53px;
  background: #04402c;
  border: 1px solid #000000;
  border-radius: 8px;
  color: white;
`;
const Link = styled(NavLink)``;
export { Container, Wrapper, Link };
