import React from "react";
// Next
import Image from "next/image";
import styles from "./OmOss.module.scss";
// Assets
import sigrid from "../../../public/images/aboutUs2.jpg";
import squad from "../../../public/images/squad.jpg";
export default function OmOss() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs_topSection}>
        <h1 className={styles.aboutUs_topSection_h1}>Om oss</h1>
      </div>
      <div className={styles.aboutUs_mainSection}>
        <div className={styles.aboutUs_mainSection_text}>
          <h2>
            Autoriserte JTI kursholdere som jobber for å øke bevisstheten rundt
            hvordan våre preferanser påvirker samhandling privat og
            profesjonelt.
          </h2>
          <p>
            JTI konsulentene.no består av kursholderne Sigrid Øyen Mull og Alf
            Inge Mull og IT ansvarlig Dave Marong. Alf Inge og Sigrid ble
            autoriserte ved Optimas Organisasjonspsykologene AS i 2014. Tanken
            på og ønsket om å også kunne tilby JTI online har gradvis vokst frem
            hos oss og etter at vi slo oss sammen med Dave- vår IT guru- så har
            drømmen om dette nå blitt en realitet.
          </p>
          <h3>Hvorfor oss?</h3>
          <p>
            Det verserer mange forenklede og noe populistiske utgaver av JTI og
            de fleste har det til felles at de gir et forenklet og til dels lite
            troverdig bilde av hva jungiansk type index faktisk er. JTI er langt
            mer enn å bare dele ut noen bokstaver og personlighetsbeskrivelser,
            JTI er å bruke tid på å sette seg inn i hva disse bokstavene betyr
            og hvordan våre forskjeller og styrker og svakheter påvirker oss
            både privat og profesjonelt. Vi anbefaler alle som ønsker å bruke
            dette verktøyet som en seriøs metode for å lære mer om seg selv og
            andre om å benytte en autorisert kursholder- autorisert ved Optimas
            organisasjonspsykologene as. Optimas har tilrettelagt JTI for det
            norske markedet og har rettighetene i Norge.
          </p>
          <p>
            <b style={{ fontSize: "1.2rem" }}>
              JTI konsulentene har lang erfaring
            </b>{" "}
            med å arrangere JTI kurs for store og små organisasjoner, både i
            offentlig og privat sektor med svært positive resultater og
            tilbakemeldinger.
          </p>
          <div className={styles.aboutUs_mainSection_img}>
            <Image src={squad} height="300" width="450" />
          </div>

          <h3>Hva JTIkonsulentene.no tilbyr privatpersoner</h3>
          <p>
            For deg som privatperson så vil kurset kunne bidra til at du både
            blir oppmerksom på og verdsetter egne og andres spesielle egenskaper
            og styrker- og bli mer bevisst på hvordan forskjellene våre kan bli
            en styrke og ikke en utfordring.
          </p>
          <ul>
            <li>Hjelpe deg i yrkes og karrierevalg</li>
            <li>Samarbeide og kommunisere bedre hjemme og på jobben</li>
            <li>
              Å forstå hvorfor noe faller lett for enkelte, og vanskelig for
              andre
            </li>
            <li>Forstå hvorfor man lettere finner tonen med enkelte</li>
            <li>
              Bruke kunnskapen om personlighetstyper til å forstå deg selv og
              dynamikken i relasjoner
            </li>
            <li>
              Bli mer bevisst og kunne forbedre de områder jeg kanskje overser
              eller som ikke faller så lett for meg
            </li>
          </ul>
          <p>
            For alle som tar dette kurset så vil vi også være tilgjengelig for
            spørsmål underveis
          </p>
          <h3>Hva JTIkonsulentene.no tilbyr bedrifter</h3>
          <p>
            For organisasjoner/team så vil kurset være en investering i
            arbeidsgiverens viktigste ressurs- den enkelte ansatte, deres
            samhandlings- og arbeidsmiljø.
          </p>
          <ul>
            <li>
              Få et logisk oversiktlig verktøy og en god tilnærming til
              psykososiale temaer i bedriften
            </li>
            <li>Konflikthåndtering/ redusere konflikter</li>
            <li>Kompetanseutvikling / personlig utvikling</li>
            <li>Relasjon og kommunikasjonsforståelse</li>
            <li>Arbeidsmiljøutvikling</li>
            <li>Organisasjons- og teamutvikling</li>
            <li>Lederutvikling</li>
            <li>Identifisere styrker, svakheter og muligheter i grupper</li>
            <li>Bygge opp forståelse for normer og kultur</li>
          </ul>
          <div className={styles.aboutUs_mainSection_img}>
            <Image src={sigrid} height="300" width="450" />
          </div>
          <h3>Fysisk kurs</h3>
          <p>
            Vi tilbyr også fysiske kurs for større eller mindre grupper. Et
            fysisk kurs vil gi mulighet for fortløpende diskusjoner og
            refleksjon knyttet opp til det enkelte arbeidssted. Fysiske kurs
            egner seg også svært godt ved for eksempel i forbindelse med
            teambuilding. JTI anbefales for både nyetablerte team/grupper og for
            team/grupper som har jobbet sammen over tid. Ønsker du pristilbud på
            et fysisk kurs så benytt skjemaet her (link til kontakt oss siden)
          </p>
        </div>
      </div>
    </div>
  );
}
