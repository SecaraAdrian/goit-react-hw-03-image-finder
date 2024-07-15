import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const ImageGalleryItem = ({ smallImageURL, largeImageURL, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(largeImageURL)}>
    <img src={smallImageURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
