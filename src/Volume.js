import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import Mass from './Mass';

// Добавить в volume.js дочерний компонент mass.js, который будет высчитывать массу куба при плотности = 1000.

class Volume extends React.Component {
  state = {
    length: 0, // Длина 
    width: 0,  // Ширина 
    height: 0, // Высота
    volume: 0
    }
    
    render() {
        return  <div className = "wrap">
                    <h1>Volume</h1>
                    <span>Длина в м:</span>
                    <input type="number" defaultValue={this.state.length} onChange={this.сhangeLength}/> 
                    <span>Ширина в м:</span>
                    <input type="number" defaultValue={this.state.width} onChange={this.сhangeWidth}/>
                    <span>Высота в м:</span>
                    <input type="number" defaultValue={this.state.height} onChange={this.сhangeHeight}/>

                    <div className = "names">
                        <span>Объём: </span>
                        {this.getVolume()} м³
                    </div>

                    <div className = "names">
                        <span>Периметр: </span>
                        {this.getPerimeter()} м
                    </div>
                    <div className="names">
                    <Result perimeter={this.getPerimeter()} volume={this.getVolume()} />   
                    </div>

                    <Mass volume={this.getVolume()}/>

{/*                     <div className = "names">
                        <span>Масса: </span>
                        {this.getMass()} кг/м³
                    </div> */}
                </div>;
      }
  
    getMass = () => {
        return parseInt(this.getVolume()) * 1000 // вызов метода расчёта массы (плотность воды = 1000 кг/м³)
    }  

    сhangeLength = (event) => {
        this.setState({length: event.target.value});
    }
    сhangeWidth = (event) => {
        this.setState({width: event.target.value});
    }
    сhangeHeight = (event) => {
        this.setState({height: event.target.value});
    }
    getVolume = () => {
        return parseInt(this.state.length) * parseInt(this.state.width) * parseInt(this.state.height) // вызов метода расчёта объёма
    }
    getPerimeter = () => {
        return parseInt(this.state.length) * parseInt(this.state.width)// вызов метода расчёта периметра
    }


    // Если объем оказывается больше 1000, то выводить периметр. Иначе выводить объём. (сложн)

/*     getResult = () => {
        if (this.getVolume() > 1000) {
            return this.getPerimeter()
        } else {
            return this.getVolume()
        }
    } */
}

const el = <Volume />; 
ReactDOM.render(
  el,

  document.getElementById('root')
);

export default Volume;