import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
const density = 1000;

class Mass extends React.Component {
    state = {
        volume: 0
    }
    
    render() {
        return  <div className = "names">
                        <span>Масса:</span>
                        {this.getMass()} кг/м³
                </div>
            }
    
    // Если объем оказывается больше 1000, то выводить периметр. Иначе выводить объём. (сложн)
    getMass = () => {
        return parseInt(this.props.volume) * density // вызов метода расчёта массы (плотность воды = 1000 кг/м³)
    }
}

const el = <Mass />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

export default Mass; 