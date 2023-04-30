import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 131px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto;
`;
const Section = styled.main`
  width: ${({ width }) => (width ? `${width}` : "100%")};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ ai }) => (ai ? `${ai}` : "center")};
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? `${margin}` : "100px auto")};
  gap: ${({ gap }) => `${gap}px`};
  height: ${({ height }) => `${height}px`};
  padding: ${({ padding }) => `${padding}`};
`;

Section.Description = styled.div`
  width: 100%;
  height: 268px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
Section.Header = styled.h1`
  font-weight: 500;
  font-size: 52px;
  line-height: 56px;
  color: #38404c;
  width: ${({ width }) => `${width}`};
`;
Section.Subheader = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: ${({ text }) => (text ? `${text}` : "center")};
  width: ${({ width }) => `${width}`};
`;
Section.Img = styled.img`
  width: 489px;
  height: 489px;
`;

// Loyiha haqida Section

const AboutProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
AboutProject.Numbers = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
`;
AboutProject.SubText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
AboutProject.Video = styled.video`
  width: 100%;
  height: 384px;
`;
Section.StepsHeader = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;
Section.StepsSubheader = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  width: 500px;
`;

const Steps = styled.div`
  width: ${({ width }) => (width ? `${width}` : "100%")};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ ai }) => (ai ? `${ai}` : "center")};
  justify-content: space-between;
  gap: ${({ gap }) => `${gap}px`};
  height: ${({ height }) => `${height}px`};
`;

Steps.Number = styled.div`
  width: 66px;
  height: 66px;
  background: #04402c;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  color: #ffffff;
`;

const Slide = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  text-align: center;
  padding: 0 101px;
`;
Section.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 622px;
  height: 739px;
  background: #fcfcfc;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 69px 42px;
  gap: 24px;
`;
Section.FormHeader = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #04402c;
`;
Section.FormPolicy = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #38404c;
`;
export { Container, Wrapper, Section, AboutProject, Steps, Slide };
