import React from "react";
import imgTop from "../../../assets/mainTop.jfif";
import styles from "./MainTop.module.css";
import herostar from "../../../assets/herostar.svg";

function Maintop() {
  return (
    <>
      <div className={styles.mainTopdiv}>
        <img className={styles.mainTopimg} src={imgTop} alt="" />
        <div className={styles.mainimgcontent}>
        <p className={styles.headingTitle}>100% ECO-FRIENDLY & MADE IN USA</p>
        <h1 className={styles.heading}>
          Sustainable greetings for every occasion
        </h1>
        <button className={styles.mainShopnow}>Shop Now</button>
      </div>

      <div className={styles.reviewsbox}>
        <p className={styles.heroP}>Excellent</p>
        <img className={styles.heroStars} src={herostar} alt="" />
        <p className={styles.heroP}>based on 800+ Reviews</p>
      </div>
      </div>



      
    </>
  );
}

export default Maintop;
