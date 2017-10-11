import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';

class App extends Component {
    render() {
        return(
            <div>
                <HelloWorld nome="Mário Lucas"/>
                <HelloWorld nome="Mundo"/>
                <HelloWorld nome="lol"/>
            </div>
        );
    }
}

export default App;
