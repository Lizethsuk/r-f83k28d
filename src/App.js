import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0
      };
    }

    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
      let clic = this.state.clicks + 1;
      console.log(clic );
    }

  render() {

    return (
      <div>
        <span className="value">{this.state.clicks}</span>
        <button onClick={this.IncrementItem} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
