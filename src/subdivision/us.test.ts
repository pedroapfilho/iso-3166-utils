import us from "./us";

const STATE = {
  name: "Alaska",
  code: "AK",
  category: "state",
};

describe("US", () => {
  it("Should get us from name", () => {
    expect(us.getFromName(STATE.name)?.name).toEqual(STATE.name);
  });

  it("Should get us from name on lowercase", () => {
    expect(us.getFromName(STATE.name.toLowerCase())?.name).toEqual(STATE.name);
  });

  it("Should get us from code", () => {
    expect(us.getFromCode(STATE.code)?.code).toEqual(STATE.code);
  });

  it("Should be undefined if value not found", () => {
    expect(us.getFromName(STATE.code)).toEqual(undefined);
  });
});
