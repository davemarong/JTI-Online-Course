import React from "react";
import styles from "./OmJTI.module.scss";
import { JTI_Icons_long } from "../JTI_Icons/JTI_Icons_long";
import { Diagram } from "../Diagram/Diagram";
import Video from "../Video/Video";

export default function OmJTI() {
  return (
    <div className={styles.body}>
      <div>
        <h1>Hva er JTI?</h1>
        <Video
          width="80%"
          height="auto"
          src="https://drive.google.com/uc?id=1APSRoL8XGWQhNkeuC7--84XSoyMkcPrP"
        />
        <h2>
          Det er viktig å huske på at typeteorier har sine begrensninger! JTI er
          ikke en personlighetstest, og den måler hverken ferdigheter IQ eller
          EQ. JTI kartlegger og belyser den enkeltes- eller teamets- preferanser
          og forskjeller på en analytisk måte.
        </h2>
      </div>
      <div>
        <h3>Hva brukes JTI til?</h3>
        <p>
          JTI kan få deg til å betrakte relasjoner, samhandling og kommunikasjon
          på en ny og spennende måte. JTI som relasjonsverktøy er nyttig for deg
          som enkeltperson, for ledere, for grupper/ team og for hele
          organisasjoner. JTI er et anerkjent og internasjonalt verktøy og er
          utviklet for individplan (JTI) og for team/grupper (Teamkompasset).
          Begge verktøyene benyttes ofte i forbindelse med
          organisasjonsutvikling og lederutvikling.
        </p>
      </div>
      <Diagram />
      <JTI_Icons_long />
    </div>
  );
}
