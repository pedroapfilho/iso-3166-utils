import { describe, it, expect } from "vitest";

import { country } from "./";

const COUNTRY = {
  name: "Afghanistan",
  alpha2: "AF",
  alpha3: "AFG",
  code: "004",
};

describe("Country", () => {
  it("Should get country from name", () => {
    expect(country.getFromName(COUNTRY.name)?.name).toEqual(COUNTRY.name);
  });

  it("Should get country from name on lowercase", () => {
    expect(country.getFromName(COUNTRY.name.toLowerCase())?.name).toEqual(
      COUNTRY.name
    );
  });

  it("Should get country from alpha2", () => {
    expect(country.getFromAlpha2(COUNTRY.alpha2)?.alpha2).toEqual(
      COUNTRY.alpha2
    );
  });

  it("Should get country from alpha3", () => {
    expect(country.getFromAlpha3(COUNTRY.alpha3)?.alpha3).toEqual(
      COUNTRY.alpha3
    );
  });

  it("Should get country from code", () => {
    expect(country.getFromCode(COUNTRY.code)?.code).toEqual(COUNTRY.code);
  });

  it("Should be undefined if value not found", () => {
    expect(country.getFromName(COUNTRY.code)).toEqual(undefined);
  });
});
