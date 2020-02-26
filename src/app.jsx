import React from 'react';
import {Home} from '../src/views/Home';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <Home/>
        );
    }
}