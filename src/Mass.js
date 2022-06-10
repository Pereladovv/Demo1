import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
const density = 1000;

class Mass extends React.Component {
    state = {
        volume: 0
    }
    constructor(props) {
        super(props);
        /* Здесь подключиться к Redux и вызвать значение VOLUME и вытащит их в консоль */
        console.log("test")
    }

    render() {
        return  <div className = "names">
                        <span>Масса:</span>
                        {this.getMass()} кг/м³
                        <button onClick={() => { this.props.mass(this.getMass())}}>Отправка обратно в родитель</button>
                </div>

            }

            
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