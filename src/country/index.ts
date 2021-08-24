import countries from "../data/countries.json";

import { Country } from "../types";

const getFromName = (name: string): Country | undefined => {
  return countries.find((c) => c.name.toUpperCase() === name.toUpperCase());
};

const getFromAlpha2 = (alpha2: string): Country | undefined => {
  return countries.find((c) => c.alpha2.toUpperCase() === alpha2.toUpperCase());
};

const getFromAlpha3 = (alpha3: string): Country | undefined => {
  return countries.find((c) => c.alpha3.toUpperCase() === alpha3.toUpperCase());
};

const getFromCode = (code: string): Country | undefined => {
  return countries.find((c) => c.code === code);
};

const country = {
  getFromName,
  getFromAlpha2,
  getFromAlpha3,
  getFromCode,
  data: countries,
};

export default country;
