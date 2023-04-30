import React from "react";
import { Container } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
export const FAQ = () => {
  return (
    <Container>
      <h1>Ko’p so’raladigan savollar</h1>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Container>
  );
};
