import React, { Component } from 'react';
import './App.scss';
import Map from './component/Map';
import foursquareAPI from './API';
import Sidebar from './component/Sidebar';



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
    this.setState({ markers: Object.assign(this.state.markers, marker) });
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    foursquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues:Object.assign(this.state.venues, newVenue) })
    });
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
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, center, markers });
      console.log(results)
    });


  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Map {...this.state}
         markerClick={this.markerClick}/>
      </div>
    );
  }
}

export default App;
