import React from "react";
import { Container, Wrapper, Link } from "./style";
import { navbar } from "../../utils/utils";
import Logo from "../../assets/imgs/Logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Logo src={Logo} onClick={() => Navigate("/home")} />
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
      <Footer />
    </Container>
  );
};
