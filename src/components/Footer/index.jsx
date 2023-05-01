import React from "react";
import {
  Container,
  Facebook,
  Instagram,
  Logo,
  Telegram,
  Wrapper,
} from "./style";
import logo from "../../assets/imgs/Logo.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Item1>
          <Logo src={logo} onClick={() => Navigate("/home")} alt="logo" />
          <Wrapper.Text>
            ©️O’qi bolajon - ta’limga yo’naltirilgan ehson loyiha bo’lib, kichik
            yoshdagi bolalarga Qur’on hadya qilish niyyat qilingan. Bu jarayon
            esa online musobaqa ko’rinishida bo’lib o’tadi.
          </Wrapper.Text>
          <Wrapper.Text>
            O’qi bolajon, 2023 Barcha huquqlar himoyalangan
          </Wrapper.Text>
        </Wrapper.Item1>
        <Wrapper.Item>
          <Wrapper.Header>Ma’lumotlar</Wrapper.Header>
          <Wrapper.Text>Yangiliklar</Wrapper.Text>
          <Wrapper.Text>Loyiha haqida</Wrapper.Text>
          <Wrapper.Text
            style={{ cursor: "pointer" }}
            onClick={() => Navigate("/faq")}
          >
            FAQ
          </Wrapper.Text>
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.Header>Bog’lanish</Wrapper.Header>
          <Wrapper.Link href="tel:+821082785727">
            +998(00) 123 45 67
          </Wrapper.Link>

          <Wrapper.Link href="mailto:o’qibolajon@gmail.com">
            o’qibolajon@gmail.com
          </Wrapper.Link>

          <Wrapper.Icons>
            <a target="blank" href="https://www.instagram.com/mike_21s/">
              <Instagram />
            </a>
            <a target="blank" href="https://t.me/@Mike_21s">
              <Telegram />
            </a>
            <a target="blank" href="https://www.instagram.com/mike_21s/">
              <Facebook />
            </a>
          </Wrapper.Icons>
        </Wrapper.Item>
      </Wrapper>
    </Container>
  );
};
