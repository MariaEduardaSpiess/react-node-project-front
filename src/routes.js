import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;