import React, { Component } from 'react';

import { App } from 'proton-native';

class Route extends Component {
    constructor(props) {
        super(props);
        this.alias = props.alias;
        this.component = props.component;
        this.default = props.default;
    }
}

export default Route;