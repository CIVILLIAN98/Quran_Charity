import React from "react";
import { Container, Wrapper, Link } from "./style";
import { navbar } from "../../utils/utils";
import Logo from "../../assets/imgs/Logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
import { HashLink } from "react-router-hash-link";
export const Navbar = () => {
  const Navigate = useNavigate();
  const currentURL = window.location.hash;
  const pathname = window.location.pathname;

  console.log(currentURL, pathname);

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

          <HashLink
            smooth
            style={{ textDecoration: "none !important", color: "white" }}
            to="/home#Contact"
          >
            {" "}
            <Wrapper.Btn
              onClick={() =>
                window.history.replaceState({}, document.title, ".")
              }
            >
              A'loqa
            </Wrapper.Btn>
          </HashLink>
        </Wrapper.Item>
      </Wrapper>
      <Outlet />
      <Footer />
    </Container>
  );
};
