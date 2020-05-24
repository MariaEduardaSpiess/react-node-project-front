import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import { Typography, Form, Input, Button } from 'antd';
import api from '../../services/api';
import logo from '../../Stryker.png';

const { Title } = Typography;

function AppLogin() {

    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = value => {
        api.post('login', value).then(response => {
            console.log('Top!');
            if (response.data.usuario) {
                localStorage.setItem('usuario', value.usuario);
                history.push('/home');
            }
        });
    };

    return (
        <div className="container">
            <div className="inner-container">
                <div className="login-form">
                    <Title>Bem Vindo</Title>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Senha" name="senha" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Entrar</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <img className="logo-img" src={logo} alt="Logo do projeto OBSEI" />
        </div>
    );
}

export default AppLogin;