import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTES} from "./helpers/constants";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div>
            <Nav/>
            <div className={'content'}>
                <Switch>
                    <Redirect exact from='/' to='/sign-in'/>
                    {
                        ROUTES.map(route => (
                            <Route key={route.id} path={route.path}>
                                {route.component}
                            </Route>
                        ))
                    }
                </Switch>
            </div>
        </div>
    )
}

export default App;