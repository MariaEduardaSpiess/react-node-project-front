import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import api from '../../services/api';

function ListagemCliente() {

    let [clientes, setClientes] = useState([]);

    useEffect(() => {
        api.get('cliente').then(response => {
            setClientes(response.data);
        });
    }, []);
      
    const columns = [
    {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
    },
    {
        title: 'Telefone',
        dataIndex: 'telefone',
        key: 'telefone',
    },
    {
        title: 'CPF',
        dataIndex: 'cpf',
        key: 'cpf',
    }
    ];
      
    return (
        <div>
            <Table dataSource={clientes} columns={columns} />
        </div>
    );
}

export default ListagemCliente;