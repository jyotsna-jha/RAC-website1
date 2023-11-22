// pages/AlumniJourney.js

import React from "react";
import styles from "@/app/styles/alumniTestimonials.module.css"; // Import the CSS module

const AlumniJourney = () => {
  return (
    <div className={styles.alumniJourneyContainer}>
      <h2 className={styles.underlinedHeading}>Alumni Success Stories</h2>
      <div className={styles.alumniCard}>
        <img
          src="Nitesh.jpg"
          alt="Alumni Image"
          className={styles.alumniImage}
        />
        <p className={styles.journeyDescription}>
          My journey with the Robotics and Automation Center (RAC) commenced in
          my freshman year, initially as a member, progressing through my
          academic journey to ultimately assume the role of President in my
          third year. As an industrial engineering graduate, RAC proved
          instrumental in honing both my technical and managerial competencies.
          In my professional life, the experience gained through active
          participation in national and international competitions representing
          RAC has been invaluable. This exposure significantly enhanced my
          intelligence and confidence, contributing to my current role as a
          Business Analyst at Hitachi Energy. Here, I am actively engaged in the
          development of cutting-edge trade risk management software within the
          Energy Commodity sector. Furthermore, the influence of RAC extended to
          my academic pursuits, shaping the development of top-tier final
          projects. Recognized as the best in our college by the Thapathali
          Graduate Conference committee, these projects have also been published
          in prestigious journals by University Scholar Conference, 2023. My
          engagement with RAC has been transformative, fostering the development
          of not only technical and managerial skills but also contributing to
          noteworthy research accomplishments
        </p>
      </div>
    </div>
  );
};

export default AlumniJourney;
