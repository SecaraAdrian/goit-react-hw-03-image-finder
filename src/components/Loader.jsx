import React from 'react';
import Loader from 'react-loader-spinner'; 
import '../index.css';

const Spinner = () => (
  <div className="LoaderOverlay">
    <Loader
      type="Circles"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} 
    />
  </div>
);

export default Spinner;
