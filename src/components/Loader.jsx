import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../index.css';

const Spinner = () => (
  <div className="LoaderOverlay">
    <Loader
      type="Rings"  
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} 
    />
  </div>
);

export default Spinner;
