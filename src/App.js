import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      red: false,
      yellow: false,
      blue: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(paramento, nome) {
    this.setState({
      [nome]: paramento
    })
  }

  render() {
    const carro = {
      redCar: this.state.red,
      yellowCar: this.state.yellow,
      blueCar: this.state.blue,
      moveCar: this.moveCar,
    }

    return (
      <MyContext.Provider value={ carro }>
        <div>
          <Cars />
        </div>
      </MyContext.Provider>
    );

  }
}

export default App;
