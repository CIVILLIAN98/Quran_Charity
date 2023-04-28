import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/svgs/Logo2.svg";
import { ReactComponent as instagram } from "../../assets/svgs/Instagram.svg";
import { ReactComponent as telegram } from "../../assets/svgs/Telegram.svg";
import { ReactComponent as facebook } from "../../assets/svgs/Facebook.svg";

const Container = styled.div`
  width: 100%;
  background: #04402c;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding: 38px 131px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 466px;
`;
Wrapper.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  gap: 40px;
`;
Wrapper.Item1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  gap: 40px;
`;
Wrapper.Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
Wrapper.Mail = styled.a`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  text-decoration: none;
`;
Wrapper.Header = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;
Wrapper.Icons = styled.div`
  display: flex;
  gap: 18px;
`;

// SVGs

const Logo = styled(logo)`
  width: 72px;
  height: 72px;
  cursor: pointer;
`;
const Instagram = styled(instagram)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Telegram = styled(telegram)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Facebook = styled(facebook)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export { Container, Wrapper, Logo, Facebook, Telegram, Instagram };
