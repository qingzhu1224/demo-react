import React, { Component } from 'react';

class Header extends Component {
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render() {
        return (
        <div className="App">
            hello, i am header
        </div>
        );
    }
}

export default Header;
