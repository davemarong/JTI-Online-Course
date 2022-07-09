import React from "react";
import styles from "./OmJTI.module.scss";
import { jti_iconsData } from "../JTI_Icons/JTI_IconsData";
import { TeamKompasset } from "../TeamKompasset/TeamKompasset";
// import film from "../../../film.mp4";

export default function OmJTI() {
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "lightblue" }}>
        JTI overskrift
      </h1>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video
            controls
            src={
              "https://rr2---sn-5go7ynl6.c.drive.google.com/videoplayback?expire=1657371301&ei=ZULJYozGD4XUu7APgqaf2AU&ip=51.175.205.48&cp=QVRKWURfUFNOQlhPOktWNWFPeVp5OTJoQnN5ZUZ2YkYwZFIydmw3dmoxTGEzVU91eHgxZXRXLXY&id=88b169d74beacfb6&itag=18&source=webdrive&requiressl=yes&mh=Jf&mm=32&mn=sn-5go7ynl6&ms=su&mv=m&mvi=2&pl=18&ttl=transient&susc=dr&driveid=1APSRoL8XGWQhNkeuC7--84XSoyMkcPrP&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=284.960&lmt=1657200148479625&mt=1657356526&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAP3dvED5cA0l6q_hsMwpcAYX4S-p3YZxyKvNede6raxoAiEAtJhD-x3rCj1YwAqtpK3DSXUcGQvYA66V1lu1_rNolW0=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhANafIXoJnNwY_3TXp0P4qhxUEzSNJC07xhHNqnT0OrffAiApS58qsn8quy4qw0W0J7Qs19B1vO_zkk57_rHS160T1g==&cpn=LhTuQP8Xh05_6dbW&c=WEB_EMBEDDED_PLAYER&cver=1.20220629.01.00"
            }
            style={{ width: "800px", height: "400px" }}
          />
        </div>
        <div>
          <h2>
            Det er viktig å huske på at typeteorier har sine begrensninger! JTI
            er ikke en personlighetstest, og den måler hverken ferdigheter IQ
            eller EQ. JTI kartlegger og belyser den enkeltes- eller teamets-
            preferanser og forskjeller på en analytisk måte.
          </h2>
          <p>
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
      <h1 style={{ backgroundColor: "lightblue" }}>
        Korte litt ned på disse listene nedenfor? Det er litt mye tekst og det
        kan være vanskelig å finne informasjon man er ute etter. Eventuelt
        splitte denne opp i flere "komponenter/avsnitt" og ha egne overskrifter.
      </h1>
      <div className={styles.container}>
        {jti_iconsData.map((item) => {
          return (
            <ul className={styles.ul}>
              <h3>{item.title}</h3>
              <h2 style={{ backgroundColor: "lightblue" }}>
                Ha et bilde her? et vektor icon for eksempel.
              </h2>
              {item.listItems.map((listItem) => {
                return <li>{listItem}</li>;
              })}
            </ul>
          );
        })}
      </div>
      <TeamKompasset />
    </div>
  );
}
