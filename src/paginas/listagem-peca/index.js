import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import api from '../../services/api';

function ListagemPeca() {

    let [pecas, setPecas] = useState([]);

    useEffect(() => {
        api.get('peca').then(response => {
            setPecas(response.data);
        });
    }, []);
      
    const columns = [
    {
        title: 'Título',
        dataIndex: 'titulo',
        key: 'titulo',
    },
    {
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao',
    }
    ];
      
    return (
        <div>
            <Table dataSource={pecas} columns={columns} />
        </div>
    );
}

export default ListagemPeca;