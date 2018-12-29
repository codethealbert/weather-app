import React, { Component } from 'react';
import LocationList from './components/LocationList';
//import logo from './logo.svg';
import './App.css';

const cities = [
  'Alvaro Obregon,MX',
  'Buenos Aires,AR',
  'Washington,US',
  'Bogota,COL',
  'Madrid,ES',
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList 
          cities={ cities }
          onSelectedLocation = { this.handleSelectionLocation}
        />
      </div>
    );
  }
}

export default App;
