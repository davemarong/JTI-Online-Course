import styles from "./BliMedlem.module.scss";
export const bliMedlemData = [
  {
    id: 0,
    title: "Vanlig",
    description: "Se hele kurset når du vil, hvor du vil.",
    price: "1199 kr",
    includes: [
      "Tilgang til alle videoer",
      "Offisiell JTI test",
      "Finn din egen JTI-type",
    ],
    className: styles.bliMedlem_vanlig,
  },
  {
    id: 1,

    title: "Premium",
    description: "Se hele kurset når du vil, hvor du vil.",
    price: "2999 kr",
    includes: [
      "Tilgang til alle videoer",
      "Offisiell JTI test",
      "Finn din egen JTI-type",
      "1 time privat opplæring",
    ],
    className: styles.bliMedlem_premium,
  },
];
