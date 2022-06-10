import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import Mass from './Mass';

// Добавить в volume.js дочерний компонент mass.js, который будет высчитывать массу куба при плотности = 1000.

class Volume extends React.Component {
  state = {
    length: 10, // Длина 
    width: 10,  // Ширина 
    height: 10, // Высота
    volume: 0,
    mass: 0
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

                    <div className="names">
                        <span>Объём: </span>
                        {this.getVolume()} м³ {/* Вывод объёма */}
                    </div>

                    <div className="names">
                        <span>Периметр: </span>
                        {this.getPerimeter()} м  {/* Вывод периметра */}
                    </div>
                    
                    <div className="names">
                        <Result perimeter={this.getPerimeter()} volume={this.getVolume()} />   
                    </div>

                    <Mass volume={this.getVolume()} mass={this.updateData}/> {/* В Mass.js передаём props "volume" из функции "getVolume" */}

                    <div className="names">
                        <span>Масса: </span>
                        {this.state.mass} м  {/* Возврат массы из ребенка */}
                    </div>




{/*                     <div className = "work">
                        <span>Масса (из mass.js): </span>
                        вывести кг/м³


                    </div> */}

                </div>;
      }

    /* Создаём в родителе функцию updateData. 
    У неё есть входной параметр value, этот параметр мы присваиваем в стейт нашего компонента, с помощью функции setState */
    updateData = (value) => {
/*         this.setState({ volume: value }) */
    this.setState({mass: value});    
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
        let volume = parseInt(this.state.length) * parseInt(this.state.width) * parseInt(this.state.height);
        /* Здесь перед return надо отправить данные в REDUX */
        return volume // вызов метода расчёта объёма
    }
    getPerimeter = () => {
        return parseInt(this.state.length) * parseInt(this.state.width)// вызов метода расчёта периметра
    }


}

const el = <Volume />; 
ReactDOM.render(
  el,

  document.getElementById('root')
);

export default Volume;