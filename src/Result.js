import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Result extends React.Component {
    state = {
        perimeter: 0, 
        volume: 0
    }
    constructor(props) {
        super(props);
    }
    
    render() {
        return  <div className = "wpar">
                        <span>Результат: </span>
                        {this.getResult()}
                </div>
      }
    
    // Если объем оказывается больше 1000, то выводить периметр. Иначе выводить объём. (сложн)
    getResult = () => {
        if (this.props.volume > 1000) {
            return "Периметр" + " " + this.props.perimeter + " " + "м"
        } else {
            return "Объём" + " " + this.props.volume + " " + "м³"
        }
    }
}

const el = <Result />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

export default Result; 