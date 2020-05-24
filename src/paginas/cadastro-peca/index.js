import React from 'react';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import api from '../../services/api';

function CadastroPeca() {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        api.post('peca', values).then(response => {
            console.log('Top!')
        });
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Título" name="titulo" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Descrição" name="descricao" rules={[{ required: true }]}>
                            <Input.TextArea rows={4} />
                        </Form.Item>        
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Marca" name="marca" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Valor" name="valor" rules={[{ required: true }]}>
                            <InputNumber style={{width: '100%'}} formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} step={0.2} min={0} initialValues={[0]} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Estoque" name="estoque" rules={[{ required: true }]}>
                            <InputNumber style={{width: '100%'}} min={0} initialValues={[0]} />
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

export default CadastroPeca;