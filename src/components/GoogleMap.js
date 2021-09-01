import React from 'react'
import GoogleMapReact from 'google-map-react'


const GoogleMap = ({ location = [] }) => {
  
  // destructuring the data right away
  const { venue, lon, lat } = location;

  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 18,
  }

  const getMapOptions = {
    disableDefaultUI: false,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
  }

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAi3X0C6tQLs9uS5Ibu4ahGRtg7uKwC-Xw' }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={getMapOptions}
        >

        <Marker lat={lat} lng={lon} venue={venue}/>

      </GoogleMapReact>
    </div>
  )
}

const Marker = ({ venue }) => <div className="pin">{venue}</div>;

export default GoogleMap
