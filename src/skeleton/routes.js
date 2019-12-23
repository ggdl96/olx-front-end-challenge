import React from 'react';
import { Route, Switch } from 'react-router-dom';

import properties from '../sections/properties/list';
import details from '../sections/properties/detail';

import NotFound from './body/notFound';

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={properties}></Route>
            <Route exact path="/:id" component={details}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    );
}
