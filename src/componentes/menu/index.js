import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

function AppMenu() {
  
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="4">
        <span>Listagem de Peças</span>
        <Link to="/listagem-peca" />
      </Menu.Item>
      <Menu.Item key="1">
        <span>Cadastro de Peça</span>
        <Link to="/cadastro-peca" />
      </Menu.Item>
      <Menu.Item key="5">
        <span>Listagem de Clientes</span>
        <Link to="/listagem-cliente" />
      </Menu.Item>
      <Menu.Item key="2">
        <span>Cadastro de Cliente</span>
        <Link to="/cadastro-cliente" />
      </Menu.Item>
      <Menu.Item key="6">
        <span>Listagem de Pedidos</span>
        <Link to="/listagem-pedido" />
      </Menu.Item>
      <Menu.Item key="3">
        <span>Cadastro de Pedidos</span>
        <Link to="/cadastro-pedido" />
      </Menu.Item>
    </Menu>
  );
}

export default AppMenu;