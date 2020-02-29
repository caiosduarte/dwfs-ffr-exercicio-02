import React from 'react';
import {Route} from 'react-router-dom';

import { Home, UserDetail, Users } from './components'


export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/users/:name" exact component={UserDetail} />
        <Route path="/users" exact component={Users} />
    </>
);

  