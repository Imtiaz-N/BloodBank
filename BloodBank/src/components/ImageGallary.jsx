import React from 'react';
import ImageDisplay from './ImageDisplay';
import styles from './ImageGallary.module.css';

const ImageGallery = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.imageRow}>
        {images.map((src, index) => (
          <ImageDisplay key={index} imageSrc={src} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
