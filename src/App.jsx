import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: 0,
            padding: 24,
            minHeight: 'calc(100vh - 64px)', // 减去Header高度
            background: colorBgContainer,
            borderRadius: 0, // 移除圆角以填满屏幕
            overflow: 'auto'
          }}
        >
          <div style={{ height: '100%' }}>
            <h1>欢迎使用管理系统</h1>
            <p>这是一个填满屏幕的布局示例</p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ 
                background: '#f0f2f5', 
                padding: '40px', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h2>主要内容区域</h2>
                <p>这个区域会随着内容增加而滚动</p>
                <div style={{ marginTop: '20px' }}>
                  {Array.from({ length: 10 }, (_, i) => (
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