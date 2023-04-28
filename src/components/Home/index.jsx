import React from "react";
import { AboutProject, Container, Section, Wrapper } from "./style";
import Button from "../generics/Button";
import mainImg from "../../assets/imgs/MainIMG.png";
import vidos from "../../assets/videos/ndila_-_Run_Run.mp4";
export const Home = () => {
  return (
    <Container>
      <Wrapper>
        {/* Main Header Section */}
        <Section>
          <Section.Description>
            <Section.Header width={"500px"}>
              “Yaratgan Robbing nomi bilan o‘qi”.
            </Section.Header>
            <Section.Subheader>Alaq surasi, 1-oyat.</Section.Subheader>
            <Button mt={"30px"} fs={20} width={"178px"} type={"dark"}>
              Batafsil
            </Button>
          </Section.Description>

          <Section.Img src={mainImg} alt="Main-IMG" />
        </Section>
        {/* About Project Section */}
        <Section column>
          <Section.Header>Loyiha haqida</Section.Header>
          <Section.Subheader width={"953px"}>
            O’qi bolajon - ta’limga yo’naltirilgan ehson loyiha bo’lib, kichik
            yoshdagi bolalarga Qur’on hadya qilish niyyat qilingan. Bu jarayon
            esa online musobaqa ko’rinishida bo’lib o’tadi.
          </Section.Subheader>
          <Section width={"780px"}>
            <AboutProject>
              <AboutProject.Numbers>2</AboutProject.Numbers>
              <AboutProject.SubText>Yil davomida</AboutProject.SubText>
            </AboutProject>
            <AboutProject
              style={{
                borderLeft: "2px solid #38404C",
                borderRight: "2px solid #38404C",
              }}
            >
              {" "}
              <AboutProject.Numbers>300</AboutProject.Numbers>
              <AboutProject.SubText>Ishtirokchilar</AboutProject.SubText>
            </AboutProject>
            <AboutProject>
              {" "}
              <AboutProject.Numbers>35+</AboutProject.Numbers>
              <AboutProject.SubText>Taqdirlanganlar</AboutProject.SubText>
            </AboutProject>
          </Section>
          <AboutProject.Video src={vidos} alt={"Video"} controls autoplay>
            {/* <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag. */}
          </AboutProject.Video>
        </Section>
      </Wrapper>
    </Container>
  );
};
