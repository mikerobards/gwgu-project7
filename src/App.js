import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import foursquareAPI from './API';


class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12
    };
  }
  closeMarkers = () => {
      const markers = this.state.markers.map(marker => {
        marker.isOpen = false;
        return marker;
      });
      this.setState({ markers: Object.assign(this.state.markers, markers) })
  };

  markerClick = marker => {
    this.closeMarkers();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) })
  };


  componentDidMount() {
    foursquareAPI.search({
      near: "Atlanta, GA",
      query: "pizza",
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        };
      });
      this.setState({ venues, center, markers });
      console.log(results)
    });


  }
  render() {
    return (
      <div className="App">
        <Map {...this.state}
         markerClick={this.markerClick}/>
      </div>
    );
  }
}

export default App;
