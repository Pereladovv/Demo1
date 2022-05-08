
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';


class Fio extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    secondName: ""
    }
    
    render() {
        return <div className = "wrap">
                <h1>FIO</h1>
                <input type="text" value={this.state.firstName} onChange={this.сhangeFirstName}/>
                <input type="text" value={this.state.lastName} onChange={this.сhangeLastName}/>
                <input type="text" value={this.state.secondName} onChange={this.сhangeSecondName}/>
            <div className = "names">
                {this.state.firstName} {this.state.lastName} {this.state.secondName}
            </div>
        </div>;
      }

    сhangeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    }
    сhangeLastName = (event) => {
        this.setState({lastName: event.target.value});
    }
    сhangeSecondName = (event) => {
        this.setState({secondName: event.target.value});
    }
}

const el = <Fio />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

export default Fio;