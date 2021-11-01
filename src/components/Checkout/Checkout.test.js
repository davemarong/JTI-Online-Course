/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout", () => {
  let course = {
    className: "bliMedlem_vanlig",
    description: "Se hele kurset når du vil, hvor du vil.",
    id: 0,
    includes: [
      "Tilgang til alle videoer",
      "Offisiell JTI test",
      "Finn din egen JTI-type",
    ],
    price: "1199 kr",
    title: "Vanlig",
  };

  it("renders 'Checkout'", () => {
    render(<Checkout course={course} />);
  });
});
