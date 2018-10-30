import React, { Component, Components } from 'react';

import { render, Window, App } from 'proton-native';
import Route from "./Route";

class Router extends Component {
    constructor(root, props) {
        super(root, props);
        this.root = root;
        this.props = this.getPropsFromRoot();

        this.findRoute = this.findRoute.bind(this);

        this.state = {
            routes: this.props,
            route: null
        };

        this.findRoute();
    }

    getPropsFromRoot() {
        return this.root.children.map((route) => {
            return route.props;
        });
    }

    findRoute(searchRoute = null) {
        const { routes, route } = this.state;

        if(route === null) {
            this.state = {
                ...this.state,
                route: routes.filter((route) => {
                    return route.default === true ? route : null;
                })[0]
            }
        }

        if(searchRoute !== null)
        {
            this.setState({
                ...this.state,
                route: routes.filter((route) => {
                    return route.alias === searchRoute ? route : null;
                })[0]
            });
        }
    }

    render() {
        const RouteComponent = {
            Component: this.state.route.component
        };
        return (
            <RouteComponent.Component test="Home" findRoute={this.findRoute}/>
        );
    }
}

export default Router;