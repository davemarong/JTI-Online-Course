//   IMPORT
// React
import React from "react";
// Next
import Image from "next/image";
// Components
import { reviewsData } from "./ReviewsData";
// Styles
import styles from "./Reviews.module.scss";
// Functional component
export default function Reviews() {
  // Return
  return (
    <div className={styles.review_container}>
      <h2 className={styles.review_h2}>Dette sier folk om JTI Online kurs</h2>
      {reviewsData.map((customer, id) => {
        return (
          <div key={customer.id} className={styles.review}>
            <div className={styles.review_image}>
              <Image src={customer.src} width="150" height="150" />
            </div>
            <p className={styles.review_message}>{customer.message}</p>
            <p className={styles.review_credentials}>
              - {customer.name}, {customer.jobTitle}: {customer.company}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
