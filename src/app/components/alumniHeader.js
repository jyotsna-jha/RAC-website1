// AlumniHeader.js

import React from 'react';
import styles from '@/app/styles/alumniHeader.module.css'; // Import the CSS module


const AlumniHeader = () => {
  return (
    <div className={styles.alumniHeader}>
      <h1>Welcome to Our Alumni Page!</h1>
      <p>Explore the achievements and stories of our talented alumni.</p>
    </div>
  );
};

export default AlumniHeader;
