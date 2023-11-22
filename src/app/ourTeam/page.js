import React from 'react';
import styles from '@/app/styles/teamcard.module.css'; // Import the CSS module
import Image from 'next/image';


const teamMembers = [
  {
    name: 'Mohit Bhusal',
    position: 'President',
    imageUrl: '/president.jpg',
  },
  {
    name: 'Pukar Giri',
    position: 'Vice President',
    imageUrl: '/pukar.jpg',
  },
  {
    name: 'Kiran Chand',
    position: 'Secretary',
    imageUrl: '/kiran2.jpg',
  },
  {
    name: 'Looza Subedi',
    position: 'Vice Secretary',
    imageUrl: '/looza2.jpg',
  },
 
  {
    name: 'Arun Koirala',
    position: 'Inventory Manager',
    imageUrl: '/arun1.jpg',
  },
  {
    name: 'Shakshi Kejriwal',
    position: 'Inventory Manager',
    imageUrl: '/sakshi4.jpeg',
  },
  {
    name: 'Ayush Raj Shah',
    position: 'Event Head',
    imageUrl: '/ayushbhai.jpg',
  },
  {
    name: 'Bishal Bhandari',
    position: 'Outreach Manager',
    imageUrl: '/bishal.jpeg',
  },
  {
    name: 'Ayush Bhusal',
    position: 'Outreach Manager',
    imageUrl: '/a2.jpg',
  },
  
  {
    name: 'Pranjal Barnwal',
    position: 'Graphics Designer',
    imageUrl: '/pranjal.jpg',
  },
  {
    name: 'Jyotsna Jha',
    position: 'Web Developer',
    imageUrl: '/jyotsnaj.jpg',
  },
  {
    name: 'Navraj Dahal',
    position: 'General Member',
    imageUrl: '/navraj.jpg',
  },
  
  {
    name: 'Arbaj Ansari',
    position: 'General Member',
    imageUrl: '/arbaj.jpg',
  },
  {
    name: 'Ramesh Kathayat',
    position: 'General Member',
    imageUrl: '/ramesh.jpg',
  },
  
  

  // Add more team members here
];

const OurTeam = () => {
  return (
    
   <>
   <h1 className={styles.headingTeam}>Our Team</h1>
   <p className={styles.parashort}>Meet our tech enthusiasts at the Robotics Club...</p>
    <div className={styles.ourTeam}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamCard}> {/* Use the same CSS class for all cards */}
          <div className={styles.cardFrame}>
            <Image src={member.imageUrl} alt={member.name} width={200} height={200} />
          </div>
          <h2>{member.name}</h2>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
   </>
  );
};

export default OurTeam;