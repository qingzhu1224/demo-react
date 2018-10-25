import React, { Component } from 'react';

class Container extends Component {
    constructor(){
        super();
        this.state={
            data: 1,
        }
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps, 'container');
    // }
    static getDerivedStateFromProps(nextProps, preState) {
        console.log('我是一个新的API', nextProps, preState);
        return { data: 3}
    }
    render() {
        return (
            <div id="App">
                hello, container <span>{this.state.data}</span>
            </div>
        );
    }
}

export default Container;
