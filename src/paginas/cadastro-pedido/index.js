import React, {useState, useEffect} from 'react'
import { Form, Select, Input, Button, Row, Col } from 'antd';
import api from '../../services/api';
const { Option } = Select;

function CadastroPedido() {

    let [pecas, setPecas] = useState([]);

    useEffect(() => {
        api.get('peca').then(response => {
            const children = [];
            for (let i = 0; i < response.data.length; i++) {
                const element = response.data[i];
                children.push(<Option key={element.id}>R$ {element.valor} - {element.titulo}</Option>);
            }
            setPecas(children);
        });
    }, []);

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        api.post('pedido', values).then(response => {
            console.log('Top!')
        });
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Itens" name="itens" rules={[{ required: true }]}>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Selecionar">
                            {pecas}
                        </Select>
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

export default CadastroPedido;