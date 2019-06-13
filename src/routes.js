import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/authorization/Landing';
import Login from './components/authorization/Login';
import Registration from  './components/authorization/Registration';
import Dashboard from './components/shop/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
)
