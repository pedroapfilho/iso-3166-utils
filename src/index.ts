import countries from './countries.json';

import type { Country } from './types';

const getCountryFromName = (name: string): Country | undefined => {
  return countries.find(c => c.name.toUpperCase() === name.toUpperCase());
};

const getCountryFromAlpha2 = (alpha2: string): Country | undefined => {
  return countries.find(c => c.alpha2.toUpperCase() === alpha2.toUpperCase());
};

const getCountryFromAlpha3 = (alpha3: string): Country | undefined => {
  return countries.find(c => c.alpha3.toUpperCase() === alpha3.toUpperCase());
};

const getCountryFromCode = (code: string): Country | undefined => {
  return countries.find(c => c.code === code);
};

export type { Country };

export {
  countries,
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
};
