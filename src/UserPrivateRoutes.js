import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './views/Navbar'
import Profileview from './views/Profileview'
export default function UserPrivateRoutes(props) {
    return (
        <div>
            <Navbar props={props} />
            <Switch>
                <Route exact path={`${props.match.path}`} component={Profileview} />
                <Route path={props.match.path} render={props=>(
                    <Redirect to={{pathname : `${props.match.path}`}} />
                )} />
            </Switch>
        </div>
    )
}