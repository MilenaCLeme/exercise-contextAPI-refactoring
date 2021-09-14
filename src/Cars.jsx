import React from 'react';
import MyContext from './MyContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({redCar, yellowCar, blueCar, moveCar}) => (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar(!redCar, 'red')}
            type="button"
          >andano
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar(!blueCar, 'blue')}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar(!yellowCar, 'yellow')}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Cars;
