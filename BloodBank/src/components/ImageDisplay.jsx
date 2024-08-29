import React from 'react';
import './ImageDisplay.module.css'; // Import the CSS file for styling

const ImageDisplay = ({ imageSrc}) => {
  return (
    <div className="image-card">
      <img src={imageSrc}  className="image" />
    </div>
  );
};

export default ImageDisplay;
