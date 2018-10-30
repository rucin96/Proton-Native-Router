import React, { Component } from 'react';

import { render, Window, App, Box } from 'proton-native';
import RouterController from './RouterController';

class MyApp extends Component {
    render() {
        return (
            <App>
                <Window title="MyApp" size={{ w: 800, h: 500 }}>
                    <Box padded>
                        <RouterController />
                    </Box>
                </Window>
            </App>
        );
    }
}

render(<MyApp />);