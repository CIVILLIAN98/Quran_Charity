import React from "react";
import { Container, Wrapper } from "./style";
import { Collapse } from "antd";
import { faqData } from "../../utils/faq";
import { HashLink } from "react-router-hash-link";
const { Panel } = Collapse;

export const FAQ = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Ko’p so’raladigan savollar</h1>
        <Wrapper.Section>
          <Collapse defaultActiveKey={["1"]} size={"large"}>
            {faqData.map((val) => {
              return (
                <Panel header={val.header} key={val.id}>
                  <HashLink className="FAQ" to={val.path || ""}>
                    {val.text}
                  </HashLink>
                </Panel>
              );
            })}
          </Collapse>
        </Wrapper.Section>
      </Wrapper>
    </Container>
  );
};
