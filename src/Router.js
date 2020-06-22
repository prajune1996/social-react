import React from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import {Guard} from './Guard';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import UserPrivateRoutes from './UserPrivateRoutes';

export default function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props=>(
                <Redirect to={{pathname:'/home'}} />
            )} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Guard path="/user" token="user-token" routeRedirect="/login" component={UserPrivateRoutes} />

        </Switch>
        </BrowserRouter>
    )
}