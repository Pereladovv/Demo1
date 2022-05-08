import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Mass extends React.Component {
    state = {
        density: 1000, 
        volume: 0
    }
    
    render() {
        return  <div className = "names">
                        <span>Масса (комп): </span>
                        {this.getMass()} кг/м³
                </div>
      }
    
    // Если объем оказывается больше 1000, то выводить периметр. Иначе выводить объём. (сложн)
    getMass = () => {
        return parseInt(this.props.volume) * (this.state.density) // вызов метода расчёта массы (плотность воды = 1000 кг/м³)
    }
}

const el = <Mass />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

export default Mass; 