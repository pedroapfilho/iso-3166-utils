import states from "../data/us.json";

import { US } from "../types";

const getFromName = (name: string): US | undefined => {
  return states.find((c) => c.name.toUpperCase() === name.toUpperCase());
};

const getFromCode = (code: string): US | undefined => {
  return states.find((c) => c.code.toUpperCase() === code.toUpperCase());
};

const us = {
  data: states,
  getFromCode,
  getFromName,
};

export default us;
