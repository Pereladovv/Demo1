
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  state = {
    counter: 0
  }

    toFour = () => {
    this.setState({counter: this.state.counter=4});
  }
    increment = () => {
    this.setState({counter: this.state.counter+1});
  }
    down = () => {
    this.setState({counter: this.state.counter-1});
  }
    clear = () => {
    this.setState({counter: this.state.counter=0});
  }

  render() {
    return <div className = "wrap">
        <h1>Counter</h1>
        <input type="text" readOnly value={this.state.counter}/>
        <button onClick={this.toFour}>4</button>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.down}>-1</button>
        <button onClick={this.clear}>Clear</button>
    </div>;
  }
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

export default App;