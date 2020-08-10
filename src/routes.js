import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Translate } from './Components/Translate';
import { Settings } from './Components/Settings';
import { Logon } from './Components/Logon';
import {AboutPage } from './Components/About';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/translate" exact>
                    <Translate />
                </Route>
                <Route path="/settings" exact>
                    <Settings />
                </Route>
                <Route path="/logon" exact>
                    <Logon />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Redirect to="/translate" />
            </Switch>
        );

    }
    return (
        <Switch>
            <Route path="/translate" exact>
                <Translate />
            </Route>
            <Route path="/logon" exact>
                <Logon />
            </Route>
            <Route path="/about" exact>
                <AboutPage />
            </Route>
            <Redirect to="/translate" />
        </Switch>

    );
}