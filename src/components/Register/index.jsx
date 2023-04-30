import React from "react";
import { Container } from "./style";
import { Section } from "../Home/style";
import Input from "../generics/input";
import Button from "../generics/Button";
import comp from "../../assets/imgs/Comp-registration.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const info = () => {
    message.info("SUCCESS", [3], onclose);
  };
  const navigate = useNavigate();
  const SignUP = () => {
    //navigate is for test
    navigate("/home");
    info();
  };
  return (
    <Container>
      <h1>Register</h1>

      <Section text={"left"}>
        <Section.Img src={comp} alt="question" />
        <Section.Form>
          <Section.FormHeader>Ro’yhatdan o’tish uchun</Section.FormHeader>
          <div>
            <Section.StepsSubheader>Ismingizni kiriting</Section.StepsSubheader>
            <Input fs={`20px`} type="text" required />
          </div>
          <div>
            <Section.StepsSubheader>
              Familyangizni kiriting
            </Section.StepsSubheader>
            <Input fs={`20px`} required={true} />
          </div>

          <div>
            <Section.StepsSubheader>
              Telefon raqamingizni kiriting
            </Section.StepsSubheader>

            <Input
              fs={`20px`}
              type={"number"}
              placeholder={"Format: 123-456-7890"}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required={true}
            ></Input>
          </div>
          <Section.FormPolicy href="">
            “Yuborish” tugmasini bosish orqali Platformadan foydalanish
            qoidalari ga rozilik bildirasiz.
          </Section.FormPolicy>
          <Button
            fs={`24px`}
            width={`100%`}
            type={"dark"}
            onClick={() => SignUP()}
          >
            So’rov yuborish
          </Button>
        </Section.Form>
      </Section>
    </Container>
  );
};
