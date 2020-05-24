import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import api from '../../services/api';

function CadastroCliente() {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        api.post('cliente', values).then(response => {
            console.log('Top!')
        });
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Nome" name="nome" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Telefone" name="telefone" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="CPF" name="cpf" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Salvar</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CadastroCliente;