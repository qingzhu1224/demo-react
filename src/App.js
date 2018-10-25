import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Container from './Container';
import Dialog from './Dialog';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: 1,
      data2: 4,
    }
  }

  click = () => {
      this.setState((props) => {
        console.log(props, 'click');
        return { data2: props.data2 + 1}
      }) 
  }

  

  render() {
    console.log(this.state, 'state')
    return (
      <div className="App" onClick={() => this.click()}>
          <Header data={this.state.data}/>
          <div>{this.state.data2}</div>
          <Container />
          <Dialog />
      </div>
    );
  }
}

export default App;
