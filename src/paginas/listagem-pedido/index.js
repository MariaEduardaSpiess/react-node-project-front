import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import api from '../../services/api';

function ListagemPedido() {

    let [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        api.get('pedido').then(response => {
            setPedidos(response.data);
        });
    }, []);
      
    const columns = [
    {
        title: 'Cliente',
        dataIndex: 'clienteId',
        key: 'clienteId',
    },
    {
        title: 'Peça',
        dataIndex: 'pecaId',
        key: 'pecaId',
    },
    {
        title: 'Quantidade',
        dataIndex: 'quantidade',
        key: 'quantidade',
    }];
      
    return (
        <div>
            <Table dataSource={pedidos} columns={columns} />
        </div>
    );
}

export default ListagemPedido;