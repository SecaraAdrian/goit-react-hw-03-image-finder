import React from 'react';
import { Rings } from 'react-loader-spinner';
import '../index.css';

const Spinner = () => (
  <div className="LoaderOverlay">
    <Rings
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} 
    />
  </div>
);

export default Spinner;
