import React from 'react';
import { Menu } from 'antd';

function AppMenu() {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Cadastro de Peças</Menu.Item>
        </Menu>
    );
}

export default AppMenu;