import React from "react";
import styles from "./BliMedlem.module.scss";
import Link from "next/link";
import { bliMedlemData } from "./BliMedlemData";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export default function BliMedlem({ course, setCourse }) {
  return (
    <div className={styles.bliMedlem}>
      <h1 className={styles.bliMedlem_h1}>Kurs og priser</h1>
      <p className={styles.bliMedlem_p}>
        Velg hvilket kurs som møter dine behov. Passer for både for
        privatpersoner og bedrifter.
      </p>
      {bliMedlemData.map((data, id) => {
        return (
          <div className={data.className}>
            <h2 className={styles.bliMedlem_card_h2}>{data.title}</h2>
            <p className={styles.bliMedlem_card_p}>{data.description}</p>
            <h3 className={styles.bliMedlem_card_h3}>{data.price}</h3>
            <div>
              <Link href={`/checkout`}>
                <a className={styles.bliMedlem_card_button_container}>
                  <button
                    onClick={() => {
                      setCourse(data.title);
                    }}
                    className={styles.bliMedlem_card_button}
                  >
                    Få tilgang
                  </button>
                </a>
              </Link>
            </div>
            <hr></hr>
            <h4>Dette inluderer:</h4>
            <ul className={styles.bliMedlem_card_ul}>
              {data.includes.map((feature, id) => {
                return (
                  <li className={styles.bliMedlem_card_ul_li}>
                    <CheckCircleOutlineIcon
                      className={styles.bliMedlem_card_ul_li_icon}
                    />
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
