import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.location}
  >
    {props.isMarkerShown && <Marker position={props.location} />}
  </GoogleMap>
))

export default MyMapComponent;