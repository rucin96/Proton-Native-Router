import React, {Component} from 'react';
import { Box, Button } from 'proton-native';

class About extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.findRoute('home')
    }

    render() {
        return (
            <Box label="About page" stretchy={false} padded>
                <Button onClick={this.handleClick}>Aboutowy Hello World!</Button>
            </Box>
        );
    }
}

export default About;