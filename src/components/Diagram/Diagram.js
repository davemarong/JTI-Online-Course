// IMPORT

// NEXT

// COMPONENTS

// UTILS

// STYLES
import styles from "./Diagram.module.scss";
// DATA

// FUNCTIONAL COMPONENTS
export const Diagram = () => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h3>De 4 typene</h3>
      <p>
        JTI måler menneskers preferanser langs fire ‘hovedlinjer’ (dimensjoner)
        i personligheten, med 8 preferanser fordelt på 4 dimensjoner
      </p>
      <table className={styles.table}>
        <tr>
          <th>Preferanse</th>
          <th>Dimensjon</th>
          <th>Preferanse</th>
        </tr>
        <tr>
          <td>Ekstrovert - E </td>
          <td>ENERGI (retning på personens energi)</td>
          <td> I - Introvert</td>
        </tr>
        <tr>
          <td>Sansing - S </td>
          <td>OPPLEVELSE (hvordan vi oppfatter informasjon)</td>
          <td> N - Intuisjon</td>
        </tr>
        <tr>
          <td>Tenking - T </td>
          <td>AVGJØRELSE (hvordan vi vurderer og beslutter)</td>
          <td> F - Følelse</td>
        </tr>
        <tr>
          <td>Avgjørelse - J </td>
          <td>LIVSSTIL (hvordan vi foretrekker å innrette oss)</td>
          <td> P - Opplevelse</td>
        </tr>
      </table>
      <p>
        JTI måler preferanser og forskjeller. Ingen preferanser er bedre enn
        andre, de er bare ulike. Det er denne ulikheten som gir dynamikk i
        kommunikasjon og samhandling, og er grunnen til at relasjoner er både
        fascinerende, krevende og givende.
      </p>
    </div>
  );
};
