import us from "./";

const STATE = {
  name: "Alaska",
  code: "AK",
  category: "state",
};

describe("SubDivision", () => {
  it("Should get subdivision from name", () => {
    expect(us.getFromName(STATE.name)?.name).toEqual(STATE.name);
  });

  it("Should get subdivision from name on lowercase", () => {
    expect(us.getFromName(STATE.name.toLowerCase())?.name).toEqual(STATE.name);
  });

  it("Should get subdivision from code", () => {
    expect(us.getFromCode(STATE.code)?.code).toEqual(STATE.code);
  });

  it("Should be undefined if value not found", () => {
    expect(us.getFromName(STATE.code)).toEqual(undefined);
  });
});
