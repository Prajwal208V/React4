import React, { Component } from 'react';
import { StudentProvider } from './components/StudentContext';

import Navigator from './components/Navigator';
import './index.css';

class App extends Component {
    render() {
        return (
            <>
                <StudentProvider>
                    <Navigator />
                </StudentProvider>
            </>
        )
    }
}

export default App;

