import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CadastroPeca from './paginas/cadastro-peca';
import ListagemPeca from './paginas/listagem-peca';
import CadastroCliente from './paginas/cadastro-cliente';
import CadastroPedido from './paginas/cadastro-pedido';

function Routes() {
    return (
        <Switch>
            <Route path="/listagem-peca" exact={true} component={ListagemPeca} />
            <Route path="/cadastro-peca" exact={true} component={CadastroPeca} />
            <Route path="/cadastro-cliente" exact={true} component={CadastroCliente} />
            <Route path="/cadastro-pedido" exact={true} component={CadastroPedido} />
        </Switch>
    )
}

export default Routes;