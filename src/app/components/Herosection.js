"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Link from "next/link";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { Mulish } from "next/font/google";

// ...
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Herosection = ({ title, subtitle }) => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg", // You can change this to 'canvas' or 'html' as needed
      loop: true, // Whether the animation should loop
      autoplay: true, // Whether the animation should start automatically
      path: "/robot.json", // Path to your Lottie JSON file in the public folder
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>

            <p>
              {" "}
              From award-winning innovation to exciting robotics projects, we've
              got your passion covered. Discover
              your new favorite robotics journey today.
            </p>
            <Link
              href="https://youtu.be/UMCdkk1Nf44?si=b4iPMhQXgDItMZdC"
              target="blank"
            >
              <div className={styles.buttonc}>
            <button className={`${mulish.className} ${styles.mulishButton}`}>Explore</button>
            </div>
            </Link>
          </div>

          <div className={heroStyles.hero_image}>
            <div ref={lottieContainerRef} id="lottie-animation"></div>
          </div>
        </div>
      </div>
      <div className={heroStyles["custom-shape-divider-bottom-1681647578"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={heroStyles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
