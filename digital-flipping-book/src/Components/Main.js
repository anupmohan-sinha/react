import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview.js';
import Repositories from './Respositories.js';
import Followers from './Followers.js';
import Following from './Following.js';
import Stars from './Stars.js';

function Main() {
    return (
        <div>
            <Switch>
                <Route path='/Overview' component={Overview} />
                <Route path='/Repositories' component={Repositories} />
                <Route path='/Followers' component={Followers} />
                <Route path='/Following' component ={Following} />
                <Route path="/Stars" component={Stars} />
            </Switch>
        </div>
    );
}

export default Main;