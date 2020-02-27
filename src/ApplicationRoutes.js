import React from 'react';
import {Route} from 'react-router-dom';

import { Home, User, Users } from './components'


export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/users/:name" component={User} />
        <Route path="/users/" component={Users} />
    </>
);

  