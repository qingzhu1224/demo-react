import React, { Component } from 'react';

class Container extends Component {
    componentWillReceiveProps(nextProps){
        console.log(nextProps, 'container');
    }
    render() {
        return (
            <div id="App">
            i am container
            </div>
        );
    }
}

export default Container;
