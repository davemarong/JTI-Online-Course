import React from "react";
import { reviewsData } from "./ReviewsData";
import Image from "next/image";
import styles from "./Reviews.module.scss";
export default function Reviews() {
  return (
    <div className={styles.review_container}>
      <h2 className={styles.review_h2}>Dette sier folk om JTI Online kurs</h2>
      {reviewsData.map((customer, id) => {
        return (
          <div className={styles.review}>
            <div className={styles.review_image}>
              <Image src={customer.src} width="150" height="150" />
            </div>
            <p className={styles.review_message}>{customer.message}</p>
            <p className={styles.review_credentials}>
              - {customer.name}, {customer.company}: {customer.jobTitle}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
