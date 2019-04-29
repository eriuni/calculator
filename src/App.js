import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: "",
      result: 0
    };
  }

  getNumbers = e => {
    const num1 = e.target.value;

    this.setState({
      input: this.state.input + num1
    });
  };

  getResult = e => {
    this.setState({
      result: eval(this.state.input),
      input: eval(this.state.input)
    });
  };

  clear = e => {
    this.setState({
      input: " ",
      result: 0
    });
  };

  del = e => {
    this.setState({
      input: this.state.input.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input type="button" value={7} name="7" onClick={this.getNumbers} />
          <input type="button" value={8} name="8" onClick={this.getNumbers} />
          <input type="button" value={9} name="9" onClick={this.getNumbers} />
          <input
            type="button"
            value={"*"}
            name="her"
            onClick={this.getNumbers}
          />
        </div>
        <div>
          <input type="button" value={4} name="4" onClick={this.getNumbers} />
          <input type="button" value={5} name="5" onClick={this.getNumbers} />
          <input type="button" value={6} name="6" onClick={this.getNumbers} />
          <input
            type="button"
            value={"-"}
            name="minus"
            onClick={this.getNumbers}
          />
        </div>
        <div>
          <input type="button" value={1} name="1" onClick={this.getNumbers} />
          <input type="button" value={2} name="2" onClick={this.getNumbers} />
          <input type="button" value={3} name="3" onClick={this.getNumbers} />
          <input
            type="button"
            value={"+"}
            name="plus"
            onClick={this.getNumbers}
          />
        </div>

        <div>
          <input type="button" value={"C"} name="clear" onClick={this.clear} />
          <input type="button" value={"Del"} name="del" onClick={this.del} />
          <input
            type="button"
            value={"="}
            name="baraz"
            onClick={this.getResult}
          />

          <input
            type="button"
            value={"/"}
            name="divide"
            onClick={this.getNumbers}
          />
        </div>

        <p>{this.state.input}</p>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
