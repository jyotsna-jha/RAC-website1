// AboutThapathaliComponent.js

import React from "react";
import Link from "next/link";
import styles from "@/app/styles/abouthome.module.css";

const AboutThapathaliComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img src="/ourteam.png" className={styles.image} alt="Campus Chief" />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.heading}>Robotics And Automation Center</div>
          <div className={styles.bodyText}>
            Robotics and Automation center (RAC) at Thapathali Campus, TU offers
            a wide range of programs for students interested in robotics and
            automation. The center provides courses in Robotics and Automation,
            Control Systems, Mechatronics, and Artificial Intelligence. These
            courses offer students practical knowledge in the field, preparing
            them for a career in the industry. The center also provides research
            opportunities for students, and they are guided by experienced
            faculty members. Students from the Automobile and Mechanical,
            Industrial, Electronics, and Computer engineering departments work
            cohesively in Robotics and Automation Center for various projects
            and competitions.{" "}
            <Link href="/about" className={`text-m ${styles.link}`}>
              &nbsp;Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThapathaliComponent;
