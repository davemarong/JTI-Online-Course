import React from "react";
import styles from "./OmJTI.module.scss";
import { jti_iconsData } from "../JTI_Icons/JTI_IconsData";
import Image from "next/image";

export default function OmJTI() {
  return (
    <div className={styles.body}>
      <h1 style={{ textAlign: "center" }}>Hva er JTI?</h1>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video
            controls
            src={
              "https://drive.google.com/uc?id=1APSRoL8XGWQhNkeuC7--84XSoyMkcPrP"
            }
            type="video/mp4"
            style={{ width: "80%", height: "auto" }}
          />
          {/* <iframe
            src="https://drive.google.com/file/d/1APSRoL8XGWQhNkeuC7--84XSoyMkcPrP/preview"
            width="640"
            height="480"
            // allow="autoplay"
          ></iframe> */}
        </div>
        <div>
          <h2>
            Det er viktig å huske på at typeteorier har sine begrensninger! JTI
            er ikke en personlighetstest, og den måler hverken ferdigheter IQ
            eller EQ. JTI kartlegger og belyser den enkeltes- eller teamets-
            preferanser og forskjeller på en analytisk måte.
          </h2>
          <h3 style={{ textAlign: "center" }}>Hva brukes JTI til?</h3>
          <p>
            {/* <b style={{ fontSize: "1.2rem" }}>Kort fortalt, </b> */}
            JTI kan få deg til å betrakte relasjoner, samhandling og
            kommunikasjon på en ny og spennende måte. JTI som relasjonsverktøy
            er nyttig for deg som enkeltperson, for ledere, for grupper/ team og
            for hele organisasjoner. JTI er et anerkjent og internasjonalt
            verktøy og er utviklet for individplan (JTI) og for team/grupper
            (Teamkompasset). Begge verktøyene benyttes ofte i forbindelse med
            organisasjonsutvikling og lederutvikling.
          </p>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>De 4 typene</h3>
          <p>
            JTI måler menneskers preferanser langs fire ‘hovedlinjer’
            (dimensjoner) i personligheten, med 8 preferanser fordelt på 4
            dimensjoner
          </p>
          <h3
            style={{
              textAlign: "center",
              margin: 100,
              backgroundColor: "lightblue",
            }}
          >
            Bilde diagram av jti typer
          </h3>
          <p>
            JTI måler preferanser og forskjeller. Ingen preferanser er bedre enn
            andre, de er bare ulike. Det er denne ulikheten som gir dynamikk i
            kommunikasjon og samhandling, og er grunnen til at relasjoner er
            både fascinerende, krevende og givende.
          </p>
        </div>
      </div>

      <div className={styles.container} style={{ gap: 20 }}>
        {jti_iconsData.map((item) => {
          return (
            <ul className={styles.ul}>
              <h3 style={{ textAlign: "center" }}> {item.title}</h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image src={item.src} height="100" width="100" />
              </div>
              {item.listItems.map((listItem) => {
                return <li>{listItem}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
