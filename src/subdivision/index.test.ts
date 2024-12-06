import { describe, it, expect } from "vitest";

import { subdivision } from "./";

const STATE = {
  name: "Alaska",
  code: "AK",
  category: "state",
};

const ALPHA_2 = "US";

describe("Subdivision", () => {
  it("Should get subdivision from name", () => {
    expect(subdivision(ALPHA_2).getFromName(STATE.name)?.name).toEqual(
      STATE.name
    );
  });

  it("Should get subdivision from name on lowercase", () => {
    expect(
      subdivision(ALPHA_2).getFromName(STATE.name.toLowerCase())?.name
    ).toEqual(STATE.name);
  });

  it("Should get subdivision from code", () => {
    expect(subdivision(ALPHA_2).getFromCode(STATE.code)?.code).toEqual(
      STATE.code
    );
  });

  it("Should be undefined if value not found", () => {
    expect(subdivision(ALPHA_2).getFromName(STATE.code)).toEqual(undefined);
  });
});
