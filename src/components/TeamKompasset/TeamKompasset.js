// IMPORT

// REACT

// NEXT
import Image from "next/image";

// REACT_NATIVE_ELEMENTS

// COMPONENTS

// UTILS

// DATA

// ICONS
import icon from "../../../public/images/icon1.png";

// FUNCTIONAL COMPONENTS
export const TeamKompasset = () => {
  // STATE

  // FUNCTIONS

  // RETURN
  console.log(icon);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 100,
        backgroundColor: "#d19c34",
      }}
    >
      <h2 style={{ width: "100%", textAlign: "center" }}>
        Hva er TeamKompasset?
      </h2>
      <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
        <div>
          <Image src={icon} height="500" width="500" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ width: "80%", margin: "auto" }}>
            Passer for team og grupper hvis oppgaver krever samhandling, er
            komplekse og stiller krav til bred kompetanse Teamkompasset er et
            verktøy som er spesielt velegnet for teamets/gruppens utvikling når
            det kommer til arbeidsfordeling, arbeidsmåter og menneskelige og
            mellommenneskelige forhold. I teamkompasset benytter vi 8 elementer
            i arbeidskjeden: Veiledning, Nytenking, Formidling.Ideutvikling,
            Iverksetting, gjennomføring, Kvalitetssikring, Opprettholdelse.
            Disse 8 elementene settes ofte i en sirkel og teamet kan vandre frem
            og tilbake i denne sirkelen. Det viktigste for et team er å sikre at
            sammensetningen av teamet er hensiktsmessig. Har du et team med
            nytenkende og iverksettende folk- men mangler sårt noen til å
            gjennomføre eller kvalitetssikre så kan enkelte oppgaver bli både
            overeksponerte eller oversett.
          </p>
        </div>
      </div>
    </div>
  );
};
