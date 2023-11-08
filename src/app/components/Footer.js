// components/Footer.js
"use client"
import styles from "@/app/styles/footer.module.css"

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      
      <div className={styles['social-links']}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#1877f2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#c32aa3" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0077b5" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="#ff0000" />
        </a>
      </div>
      <div className={styles['right-section']}>
        <button onClick={scrollToTop} className={styles['scroll-top-button']}>
          <RiArrowUpSLine size={24} />
        </button>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Robotics & Automation Center
      </div>
    </footer>
  );
};

export default Footer;
