import countries from "../data/countries.json";

const getFromName = (name: string) => {
  const country = countries.find(
    (c) => c.name.toUpperCase() === name.toUpperCase()
  );

  if (!country) throw new Error("COUNTRY_NOT_FOUND");

  return country;
};

const getFromAlpha2 = (alpha2: string) => {
  const country = countries.find(
    (c) => c.name.toUpperCase() === alpha2.toUpperCase()
  );

  if (!country) throw new Error("COUNTRY_NOT_FOUND");

  return country;
};

const getFromAlpha3 = (alpha3: string) => {
  const country = countries.find(
    (c) => c.name.toUpperCase() === alpha3.toUpperCase()
  );

  if (!country) throw new Error("COUNTRY_NOT_FOUND");

  return country;
};

const getFromCode = (code: string) => {
  const country = countries.find(
    (c) => c.name.toUpperCase() === code.toUpperCase()
  );

  if (!country) throw new Error("COUNTRY_NOT_FOUND");

  return country;
};

const country = {
  getFromName,
  getFromAlpha2,
  getFromAlpha3,
  getFromCode,
  data: countries,
};

export { country };
