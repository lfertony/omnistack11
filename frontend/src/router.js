import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profiles from './pages/Profile';
import NewIncident from './pages/NewIncent';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profiles} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}