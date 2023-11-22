import React from 'react';
import styles from '@/app/styles/achievement.module.css';
import { Mulish } from "next/font/google";
import Image from 'next/image';

// ...
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Achievement = () => {
  return (
    <div className={styles.achievementContainer}>
      <h1 className={styles.achievementTitle}>
        <Image src="/achievementicon.png" alt="Achievement Icon" className={styles.achievementIcon} width={100} height={100}/>
        Our Achievements
      </h1>
      <div className={styles.cardRow}>
        {/* First Card */}
        <div className={`card ${styles.achievementCard}`}>
          <Image src="/micromouse5.jpg" className="card-img-top" alt="achievementimg1" width={300} height={250} />
          <div className={styles["card-body"]}>
          <h3 className={styles["card-title"]}>Micromouse Competition</h3>
            <p className="card-text">2nd Runner Up, IIT Bombay, 2022</p>
            <a href="https://drive.google.com/drive/folders/1ZvO1aXkVKVZ2cgqXInEUFy3mumFhQnzX" target='_blank'>
              <div className={styles.buttonc}>
                <button className={`${mulish.className} ${styles.mulishButton}`}>View</button>
              </div>
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className={`card ${styles.achievementCard}`}>
          <Image src="/micromouse2.jpg" className="card-img-top" alt="..." width={300} height={250} />
          <div className={styles["card-body"]}>
          <h3 className={styles["card-title"]}>Micromouse Competition</h3>
            <p className="card-text">2nd Runner Up, IIT Bombay, 2022</p>
            <a href="https://drive.google.com/drive/folders/1ZvO1aXkVKVZ2cgqXInEUFy3mumFhQnzX" target='_blank'>
              <div className={styles.buttonc}>
                <button className={`${mulish.className} ${styles.mulishButton}`}>View</button>
              </div>
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className={`card ${styles.achievementCard}`}>
          <Image src="/rowboatics.png" className="card-img-top" alt="..." width={300} height={250} />
          <div className={styles["card-body"]}>
          <h3 className={styles["card-title"]}>Rowboatics Competition</h3>
            <p className="card-text">Winner, IIT Bombay, 2020</p>
            <div className={styles.buttonc}>
              <button className={`${mulish.className} ${styles.mulishButton}`}>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
