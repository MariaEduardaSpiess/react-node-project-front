import React, {useState, useEffect} from 'react'
import { Form, Select, Input, InputNumber, Button, Row, Col, Table } from 'antd';
import api from '../../services/api';
const { Option } = Select;

function CadastroPedido() {

    let [pecas, setPecas] = useState([]);
    let [produto, setProduto] = useState([]);
    let [clientes, setClientes] = useState([]);
    let [cliente, setCliente] = useState([]);

    useEffect(() => {
        api.get('peca').then(response => {
            const children = [];
            for (let i = 0; i < response.data.length; i++) {
                const element = response.data[i];
                children.push(<Option key={element.id}>{element.titulo}</Option>);
            }
            setPecas(children);
        });

        api.get('cliente').then(response => {
            const children = [];
            for (let i = 0; i < response.data.length; i++) {
                const element = response.data[i];
                children.push(<Option key={element.id}>{element.nome}</Option>);
            }
            setClientes(children);
        });
    }, []);

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        api.post('pedido', values).then(response => {
            console.log('Top!');
        });
    };

    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={10}>
                        <Form.Item label="Cliente" name="clienteId" rules={[{ required: true }]}>
                        <Select
                            style={{ width: '100%' }}
                            onChange={setCliente}
                            value={cliente}
                            placeholder="Selecionar">
                            {clientes}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="Peça" name="pecaId" rules={[{ required: true }]}>
                        <Select
                            style={{ width: '100%' }}
                            onChange={setProduto}
                            value={produto}
                            placeholder="Selecionar">
                            {pecas}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Quantidade" name="quantidade" rules={[{ required: true }]}>
                            <InputNumber style={{width: '100%'}} min={1} />
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