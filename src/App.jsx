import React, { useState } from "react";

import { Layout, theme } from "antd";
const { Sider, Content } = Layout;
import SiderMenu from "./views/layout/sider/SiderMenu.jsx";

import HeaderLayout from "./views/layout/header/HeaderLayout.jsx";

const App = () => {
  const [collapsed] = useState(false);
  const a = "abc";
  console.log({ [a]: 1243 });
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderMenu />
      </Sider>
      <Layout>
        <HeaderLayout />
        <Content
          style={{
            margin: 0,
            padding: 24,
            minHeight: "calc(100vh - 64px)", // 减去Header高度
            background: colorBgContainer,
            borderRadius: 0, // 移除圆角以填满屏幕
            overflow: "auto",
          }}
        >
          <div style={{ height: "100%" }}>
            <h1>欢迎使用管理系统</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#f0f2f5",
                  padding: "40px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <h2>主要内容区域</h2>
                <p>这个区域会随着内容增加而滚动</p>
                <div style={{ marginTop: "20px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <p key={i}>内容项 {i + 1}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
