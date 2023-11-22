// src/app/components/RacImageGallery.js
"use client"
import React, { useState } from 'react';
import styles from "@/app/styles/racgallery.module.css"
import Image from 'next/image';

const images = [
  {
    id: 1,
    src: '/rac3.jpg', 
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '/rac4.jpg', 
    alt: 'Image 2',
  },
  {
    id:3,
    src:'/rac5.jpg',
    alt:'Image 3',

  },

  {
    id:5,
    src:'/rac7.jpg',
    alt:'Image 5',

  },

  

  {
    id:7,
    src:'/rac9.jpg',
    alt:'Image 7',

  },
  {
    id:8,
    src:'/rac10.jpg',
    alt:'Image 8',

  },



  {
    id:13,
    src:'/rac15.jpg',
    alt:'Image 3',

  },
  {
    id:14,
    src:'/rac16.jpg',
    alt:'Image 3',

  },
  {
    id:15,
    src:'/rac17.jpg',
    alt:'Image 3',

  },
  {
    id:16,
    src:'/rac18.jpg',
    alt:'Image 3',

  },

  
  {
    id:20,
    src:'/rac22.jpg',
    alt:'Image 3',

  },
  

  
  {
    id:23,
    src:'/rac25.jpg',
    alt:'Image 3',

  },
  {
    id:24,
    src:'/rac26.jpg',
    alt:'Image 3',

  },
  {
    id:25,
    src:'/rac27.jpg',
    alt:'Image 3',

  },
  
  

];

const RacImageGallery = ({ title, description }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageInNewTab = (src) => {
    window.open(src, '_blank');
  };


  return (
    <>
    <h1 className={styles.headingimage} data-text="Visual Voyage...">Visual Voyage...</h1>
    <div className={styles.gallery}>
      {images.map((image) => (
        <div key={image.id} className={styles.imageContainer}>
          <Image
            src={image.src}
            alt={image.alt}
            className={styles.image}
            onClick={() => openImageInNewTab(image.src)}
            width={250}
            height={250}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default RacImageGallery;
