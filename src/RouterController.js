import React, { Component } from 'react';

import Router from "../lib/Router/Router";
import Route from "../lib/Router/Route";
import Home from "./Home";
import About from "./About";

class RouterController extends Component {
    render() {
        return (
                <Router>
                    <Route alias="home" component={Home} default />
                    <Route alias="about" component={About} />
                </Router>
        );
    }
}

export default RouterController;