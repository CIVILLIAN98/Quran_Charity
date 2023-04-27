import React from "react";
import { Container, Wrapper, Link } from "./style";
import { navbar } from "../../utils/utils";
import Logo from "../../assets/imgs/Logo.png";
import { Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Logo src={Logo} />
        <Wrapper.Item>
          {navbar.map((val, index) => {
            return (
              !val.hidden && (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={val.path}
                >
                  {val?.title}
                </Link>
              )
            );
          })}
          <Wrapper.Btn>A'loqa</Wrapper.Btn>
        </Wrapper.Item>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
