import React from 'react';
import './App.css';
import Routes from './routes';
import { Layout, Breadcrumb } from 'antd';
import AppMenu from './componentes/menu';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <AppMenu/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Routes />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
