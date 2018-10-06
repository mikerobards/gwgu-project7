import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  <GoogleMap
    defaultZoom={9} zoom={props.zoom}
    defaultCenter={{ lat: 33.753746, lng: -84.386330 }}
    center={props.center}>
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => (
      <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.markerClick(marker)}>
        {marker.isOpen && <InfoWindow>
          <p>Hello</p>
        </InfoWindow>}
      </Marker>
    ))}
  </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    return (<MyMapComponent
      {...this.props}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC8Hop-AJho69QG-IOUFPjdyP8AFHoTsFk"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `650px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
  }
}
