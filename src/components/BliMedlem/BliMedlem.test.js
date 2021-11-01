/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import BliMedlem from "./BliMedlem";

describe("Bli Medlem", () => {
  it("renders 'Bli Medlem'", () => {
    render(<BliMedlem />);
  });
});
