import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CadastroPeca from './paginas/cadastro-peca';
import ListagemPeca from './paginas/listagem-peca';
import CadastroCliente from './paginas/cadastro-cliente';
import ListagemCliente from './paginas/listagem-cliente';
import CadastroPedido from './paginas/cadastro-pedido';
import ListagemPedido from './paginas/listagem-pedido';

function Routes() {
    return (
        <Switch>
            <Route path="/listagem-peca" exact={true} component={ListagemPeca} />
            <Route path="/cadastro-peca" exact={true} component={CadastroPeca} />
            <Route path="/listagem-cliente" exact={true} component={ListagemCliente} />
            <Route path="/cadastro-cliente" exact={true} component={CadastroCliente} />
            <Route path="/listagem-pedido" exact={true} component={ListagemPedido} />
            <Route path="/cadastro-pedido" exact={true} component={CadastroPedido} />
        </Switch>
    )
}

export default Routes;