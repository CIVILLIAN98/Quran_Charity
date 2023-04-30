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
  margin: 0 auto;
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
  text-align: center;
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
export { Container, Wrapper, Section, AboutProject, Steps };
