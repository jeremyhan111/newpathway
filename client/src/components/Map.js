import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
class Maps extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1> // title
// MOST IMPORTANT: Here we are passing the Google Maps props down to the MapContainer component as 'google'.
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(Maps)