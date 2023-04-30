import React from "react";
import {
  AboutProject,
  Container,
  Section,
  Wrapper,
  Steps,
  Slide,
} from "./style";
import Button from "../generics/Button";
import mainImg from "../../assets/imgs/MainIMG.png";
import ishtrokEtish from "../../assets/imgs/Ishtrok Etish Tartibi.png";
import n01 from "../../assets/imgs/01-Number.png";
import n02 from "../../assets/imgs/02-Number.png";
import vidos from "../../assets/videos/ndila_-_Run_Run.mp4";
import SimpleSlider from "../Carousel";

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
          <AboutProject.Video
            src={vidos}
            alt={"Video"}
            controls
            autoplay
          ></AboutProject.Video>
        </Section>

        {/* Ishtrok Etish Tartibi Section */}

        <Section column gap={40}>
          <Section.Header>Ishtirok etish tartibi</Section.Header>
          <Section.Subheader>
            Loyihada qatnashish juda oson. Xech qanday qiyinchiliklarsiz biz
            bilan aloqaga chiqish orqali siz yoki sizning kichik yoshdagi
            yaqinlaringiz qatnashishi mumkin.
          </Section.Subheader>

          <Section margin={0} width={`100%`}>
            <img src={ishtrokEtish} alt="IMG" />

            <Section
              column
              height={500}
              margin={`0px`}
              ai={"flex-end"}
              width={`fit-contnet`}
            >
              <Steps gap={25}>
                <img src={n01} alt="01" />
                <Steps column ai={"flex-start"}>
                  <Section.StepsHeader>
                    Biz bilan bog’lanish
                  </Section.StepsHeader>
                  <Section.StepsSubheader>
                    Telegram orqali bizga qatnashuvchini Qur’on tilovatini audio
                    yoki video ko’rinishida jonatasiz
                  </Section.StepsSubheader>
                </Steps>
              </Steps>
              <Steps gap={25}>
                <img src={n02} alt="01" />
                <Steps column ai={"flex-start"}>
                  <Section.StepsHeader>Tekshirish</Section.StepsHeader>
                  <Section.StepsSubheader>
                    Qatnashuvchilarni yuborgan tilovatini bizning hodimlarimiz
                    saralab chiqishadi
                  </Section.StepsSubheader>
                </Steps>
              </Steps>
              <Steps gap={25}>
                <Steps.Number>03</Steps.Number>
                <Steps column ai={"flex-start"}>
                  <Section.StepsHeader>Musobaqalashish</Section.StepsHeader>
                  <Section.StepsSubheader>
                    Tekshirish bosqichidan o’tgan ishtirokchilar musobaqada
                    qatnashishi mumkin
                  </Section.StepsSubheader>
                </Steps>
              </Steps>
              <Steps gap={25}>
                <Steps.Number>04</Steps.Number>
                <Steps column ai={"flex-start"}>
                  <Section.StepsHeader>Mukofotlash</Section.StepsHeader>
                  <Section.StepsSubheader>
                    Musobaqada sovrindor qatnashuvchilarga biz taqdirlash
                    marosimida sovg’alarimizni topshiramiz
                  </Section.StepsSubheader>
                </Steps>
              </Steps>
            </Section>
          </Section>
        </Section>
        {/* Jarayon Section */}
        <Section column gap={40}>
          <Section.Header>Jarayon</Section.Header>
          <Section.Subheader>
            Tasvirga olingan ishtirokchilarning taassurotlarini video lavha va
            rasm ko’rinishida doimiy ravishda insonlar bilan ulashamiz.
          </Section.Subheader>
        </Section>
      </Wrapper>
      <Slide>
        <SimpleSlider />
      </Slide>
    </Container>
  );
};
