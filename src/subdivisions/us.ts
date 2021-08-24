import us from "../data/us.json";

import { US } from "../types";

const getUSFromName = (name: string): US | undefined => {
  return us.find((c) => c.name.toUpperCase() === name.toUpperCase());
};

const getUSFromCode = (code: string): US | undefined => {
  return us.find((c) => c.code.toUpperCase() === code.toUpperCase());
};

export { getUSFromName, getUSFromCode };
