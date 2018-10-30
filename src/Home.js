import React, {Component} from 'react';
import { Box, Button } from 'proton-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.findRoute('about')
    }

    render() {
        return (
            <Box label="Home page" stretchy={false} padded>
                <Button onClick={this.handleClick}>Homowy Hello World!</Button>
            </Box>
        );
    }
}

export default Home;