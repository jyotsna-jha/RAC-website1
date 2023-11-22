// GoogleMap.js
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "@/app/styles/googleMap.module.css"; // Import the CSS module

const containerStyle = {
  width: '100%',
  height: '400px',
};

const locationCoordinates = {
  lat: 27.6941142, // Replace with the extracted latitude
  lng: 85.3158304, // Replace with the extracted longitude
};

const GoogleMapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className={styles['google-map-container']}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={locationCoordinates} zoom={16} className={styles['google-map']}>
          <Marker position={locationCoordinates} icon={{ path: 'M12 2C7.028 2 3 6.028 3 11c0 6.5 9 13 9 13s9-6.5 9-13c0-4.972-4.028-9-9-9zM7 11c0-2.488 2.012-4.5 4.5-4.5S16 8.512 16 11c0 1.43-1.015 3.717-1.869 5.469-.171.341-.318.631-.431.844-.105.204-.208.385-.313.531l-.02.028c-.18.25-.344.474-.48.661l-.036.049-.027.036-.022.029c-.146.19-.325.377-.528.562l-.01.009c-.417.363-.973.708-1.646.996-.566.255-1.243.435-2.004.531-.504.073-1.047.106-1.605.106C9.488 15.5 7 13.012 7 11zm2 0c0 1.102.898 2 2 2s2-.898 2-2-.898-2-2-2-2 .898-2 2z', fillColor: '#ff0000', fillOpacity: 1, strokeWeight: 0, scale: 2 }} className={styles['google-map-marker']} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
