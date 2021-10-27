import icon1 from "../../../public/images/icon4.svg";
import icon2 from "../../../public/images/icon5.svg";
import styles from "./KursInfo.module.scss";
export const kursInfoData = [
  {
    id: 0,
    title: "Vanlig",
    description:
      "Dette er et kurs for privatpersoner. Her vil du få en gjennomgang av alt du trenger å vite innenfor JTI type teori og hvordan du kan bruke det i ditt liv.",
    img: icon1,
    className: styles.kursInfo_vanlig,
  },
  {
    id: 1,
    title: "Premium",
    description:
      "Dette er et kurs for privatpersoner. I denne pakken vil du få alt som er i den vanlige pakken. Du vil også få en 1 time personlig 1 til 1 samtale med Sigrid Øyen. Her kan du spørre om hva du vil, og du vil få en meget personlig tilbakemelding om din type og tips om strategier fremover.",
    img: icon2,
    className: styles.kursInfo_premium,
  },
];
