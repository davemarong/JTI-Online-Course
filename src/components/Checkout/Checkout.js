import React from "react";
import styles from "./Checkout.module.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Checkout({ course }) {
  return (
    <div className={styles.checkout}>
      <h1 className={styles.checkout_h1}>
        {course.price
          ? "Du har valgt dette kurset:"
          : "Du har ikke valgt et kurs enda..."}
      </h1>
      <form
        className={styles.checkout_form_container}
        action={`${
          course.price
            ? "/api/checkout_sessions_${course.title}"
            : "/bli-medlem"
        }`}
        method="POST"
      >
        {course.price ? (
          <div className={styles.checkout_form}>
            <h2 className={styles.checkout_form_h2}>{course.title}</h2>
            <p className={styles.checkout_form_p}>{course.description}</p>
            <h3 className={styles.checkout_form_h3}>{course.price}</h3>
            <hr className={styles.checkout_form_hr}></hr>
            <h4 className={styles.checkout_form_h4}>Dette inluderer:</h4>
            <ul className={styles.checkout_form_ul}>
              {course.includes.map((feature, id) => {
                return (
                  <li className={styles.checkout_form_ul_li} key={id}>
                    <CheckCircleOutlineIcon
                      className={styles.checkout_form_ul_li_icon}
                    />
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div className={styles.checkout_button_container}>
          <button className={styles.checkout_button} type="submit" role="link">
            {course.price ? "Gå videre" : "Se kurs"}
          </button>
        </div>
      </form>
    </div>
  );
}
