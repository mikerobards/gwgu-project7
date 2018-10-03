import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 33.753746, lng: -84.386330 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 34.0757217302915, lng: -84.3872027197085 }} />
    )}
  </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    return (<MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC8Hop-AJho69QG-IOUFPjdyP8AFHoTsFk"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `650px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
  }
}
