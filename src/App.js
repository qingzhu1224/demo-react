import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: 1,
      data2: 4,
    }
  }

  click = () => {
      this.setState({
        data2: this.data2++,
      })
  }

  render() {
    return (
      <div className="App" onClick={() => this.click()}>
          <Header data={this.state.data}/>
          <div>{this.state.data2}</div>
      </div>

    );
  }
}

export default App;
