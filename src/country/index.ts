import countries from "../data/countries.json";

const getFromName = (name: string) => {
  return countries.find((c) => c.name.toUpperCase() === name.toUpperCase());
};

const getFromAlpha2 = (alpha2: string) => {
  return countries.find((c) => c.alpha2.toUpperCase() === alpha2.toUpperCase());
};

const getFromAlpha3 = (alpha3: string) => {
  return countries.find((c) => c.alpha3.toUpperCase() === alpha3.toUpperCase());
};

const getFromCode = (code: string) => {
  return countries.find((c) => c.code.toUpperCase() === code.toUpperCase());
};

const data: {
  name: string;
  alpha2: string;
  alpha3: string;
  code: string;
}[] = countries;

const country = {
  getFromName,
  getFromAlpha2,
  getFromAlpha3,
  getFromCode,
  data,
};

export { country };
