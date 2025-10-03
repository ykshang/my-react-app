import React, { useState } from "react";

import { Layout, theme, Button } from "antd";
const { Header } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const HeaderLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};
export default HeaderLayout;
