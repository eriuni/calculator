import React from 'react';

import './App.css';
import GetSum from './GetSum.js'


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      num: "",
      result: 0
    };
  }


   getNumbers = (e) => {
    const num1 = e.target.value;
    
    this.setState({
      num: this.state.num + num1
      
    });
  };

  getResult = e => {
    this.setState({
      result: eval(this.state.num),
      num: eval(this.state.num)
    })
  }

  clear = e => {
    this.setState({
      num: " ",
      result: 0
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <input type="button" value={7} name="7" onClick = {this.getNumbers}/ >
        <input type="button" value={8} name="8" onClick = {this.getNumbers} />
        <input type="button" value={9} name="9" onClick = {this.getNumbers}/ >
      </div>
        <div>
        <input type="button" value={4} name="4" onClick = {this.getNumbers}/ >
        <input type="button" value={5} name="5" onClick = {this.getNumbers} />
        <input type="button" value={6} name="6" onClick = {this.getNumbers}/ >
      </div>
      <div>
        <input type="button" value={1} name="1" onClick = {this.getNumbers}/ >
        <input type="button" value={2} name="2" onClick = {this.getNumbers} />
        <input type="button" value={3} name="3" onClick = {this.getNumbers}/ >
      </div>
      <div>
        <input type="button" value={'+'} name="plus" onClick = {this.getNumbers}/ >
        <input type="button" value={'-'} name="minus" onClick = {this.getNumbers} />
        <input type="button" value={'*'} name="her" onClick = {this.getNumbers}/ >
        <input type="button" value={'/'} name="divide" onClick = {this.getNumbers} />
      </div>
      
      <div>
        <input type="button" value={'='} name="baraz" onClick = {this.getResult}/ >
        <input type="button" value={'C'} name="clear" onClick = {this.clear}/ >
       
      </div>

      <p>{this.state.num}</p>
      <p>{this.state.result}</p>

      </div>
    );
  }
}

export default App;
