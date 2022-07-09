import React from "react";
import Nav from "../src/components/Nav/Nav";
import OmOss from "../src/components/OmOss/OmOss";
import Footer from "../src/components/Footer/Footer";
export default function omOss({
  isLogged,
  jwt,
  setCurrentVideo,
  currentVideo,
}) {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <OmOss />
      {/* <div>
        <p>
          Dine preferanser påvirker deg kanskje mer enn du er klar over! Har du
          lyst til å forstå mer om hvordan dine preferanser påvirker deg, dine
          handlinger og dine relasjoner? Da er Jung Type Index et godt verktøy.
          JTI er ikke en personlighetstest, og den måler hverken ferdigheter IQ
          eller EQ. JTI kartlegger og belyser den enkeltes- eller teamets-
          preferanser og forskjeller på en analytisk måte. Typeteorien i JTI kan
          få deg til å betrakte relasjoner, samhandling og kommunikasjon på en
          ny og spennende måte. JTI som relasjonsverktøy er nyttig for deg som
          enkeltperson, for ledere, for grupper/ team og for hele
          organisasjoner. JTI er et anerkjent og internasjonalt verktøy og er
          utviklet for individplan (JTI) og for team/grupper (Teamkompasset).
          Begge verktøyene benyttes ofte i forbindelse med
          organisasjonsutvikling og lederutvikling.
        </p>
      </div> */}
      <Footer />
    </div>
  );
}
