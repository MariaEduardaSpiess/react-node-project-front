import React from 'react';
import './App.css';
import Routes from './routes';
import { Layout } from 'antd';
import AppMenu from './componentes/menu';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './Stryker.png';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <img className="logo" src={logo} />
          <AppMenu/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
