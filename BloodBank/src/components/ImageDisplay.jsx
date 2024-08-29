import React from 'react';
import styles from './ImageDisplay.module.css';

const ImageDisplay = ({ imageSrc, altText }) => {
  return (
    <div className={styles.imageCard}>
      <img src={imageSrc} alt={altText || "Image"} className={styles.image} />
    </div>
  );
};

export default ImageDisplay;
