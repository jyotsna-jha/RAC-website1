// Import icons
import { MdEmail, MdForum, MdPhone } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import styles from "@/app/styles/contact.module.css";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Email */}
          <div className={styles.grid_card}>
            <i> <MdEmail /> </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>Response time: 72 hours</p>
            <Link href="/">Send Email <span>-&gt;</span></Link>
          </div>

          {/* Facebook Group */}
          <div className={styles.grid_card}>
            <i> <FaFacebookSquare /> </i>
            <h2>Facebook Group</h2>
            <p>Connect with our community</p>
            <Link href="/">Join Group <span>-&gt;</span></Link>
          </div>

          {/* Phone Number */}
          <div className={styles.grid_card}>
            <i> <MdPhone /> </i>
            <h2>Phone Number</h2>
            <p>Available during College hours</p>
            <p className={styles.last_para}>Call us at: 123-456-7890</p>
            {/* Add your actual phone number or link to your phone service */}
          </div>

          {/* Community Forum */}
         
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
