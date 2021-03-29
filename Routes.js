import React, { Component } from "react";

import Navigator from "./Navigator";
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Navigator" exact component={Navigator} />
                </Switch>
            </Router>
        )
    }
}
