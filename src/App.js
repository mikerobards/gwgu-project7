import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import foursquareAPI from './API';


class App extends Component {
  componentDidMount() {
    foursquareAPI.search({
      near: "Atlanta, GA",
      query: "pizza",
      limit: 10
    }).then(results => console.log(results))
  }
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
