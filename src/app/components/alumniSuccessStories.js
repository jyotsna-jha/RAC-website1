// AlumniSuccessStories.js
"use client"
import React from 'react';
import styles from '@/app/styles/alumniSuccessStories.module.css'; // Import the CSS module
import { Mulish } from "next/font/google";
import Image from 'next/image';

// ...
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",

});

const AlumniSuccessStories = () => {
  // Placeholder data
  const successStories = [
    { name: 'Saroj Shakya', achievement: 'Lead Software Engineer at Javra Software,Ex President at RAC', image: '/saroj.jpg' },
    { name: 'Bijay Raj Paudel', achievement: 'Software Engineer at Intel Corporation,Ex President at RAC', image: '/2.jpg' },
    { name: 'Prasanna Man Rajbanshi', achievement: 'Senior Telecom Engineer at Nepal Telecom,Ex President at RAC', image: '/prasan.jpg' },
    { name: 'Abhishek Pandey', achievement: 'Assistant Lecturer at Thapathali Campus, Ex President at RAC', image: '/abhishek.jpg' },
    { name: 'Pukar Giri', achievement: 'Software Engineer at leapfrog, Ex President at RAC', image: '/pukar1.jpg' },
    { name: 'Raghav Adhikari', achievement: 'Graduate Assistant at Clemson University, Ex President at RAC', image: '/raghav.jpg' },
    { name: 'Sujata Basyal', achievement: 'Engineer at Datalytics Global, Ex President at RAC', image: '/1.jpg' },
    { name: 'Nitesh Silwal', achievement: 'Business Analyst at Hitachi Energy, Ex President at RAC', image: '/Nitesh.jpg' },
    { name: 'Abiskar Timisina', achievement: 'Software Engineer at Ma Grepsr, Ex President at RAC', image: '/abiskar.jpg' },
    { name: 'Rohit Pati', achievement: 'Mechanical Engineer, Project Manager at Team Shireto', image: '/rho.jpg' },
    { name: 'Dhan Prashad Pradhan', achievement: 'Mechanical Engineer, Mechanical Design Engineer at Yatri Motors', image: '/dhan.jpg' },
     { name: 'Aayushma Pant', achievement: 'Computer Vision Research Engineer at Angelswing', image: '/ayushma.jpg' },
  
    { name: 'Rodashi Pant', achievement: 'Mechanical Engineer, Assistant Lecturer at Thapathali Campus', image: '/rodasi.jpg' },
    { name: 'Namrata Das', achievement: 'Electronics & information Engineer, ML Engineer at GritFeat Solutions', image: '/n.jpg' },
    { name: 'Rakshya Pant', achievement: 'Electronics & information Engineer, R&D Engineer at Javra Software', image: '/rakshya.jpg' },
    
    // Add more success stories
  ];

  return (
    <div className={styles.successStories}>
      <h2 className={styles.underlinedHeading}>Meet Our Alumni</h2>
      <div className={styles.storyContainer}>
        {successStories.map((story, index) => (
          <div key={index} className={styles.storyCard}>
            <Image src={story.image} alt={story.name} width={200} height={200} />
            <h3>{story.name}</h3>
            <p>{story.achievement}</p>
            <button className={styles.contactButton}>Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSuccessStories;
