import React from 'react'
import styles from "../style";
import SayHi from "./SayHi";

const ContactMe = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-purple-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's get in touch.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Have a question? Want to see my resume? Leave a message!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <SayHi />
    </div>
  </section>
);

export default ContactMe