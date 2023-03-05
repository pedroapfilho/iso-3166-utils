import subdivisions from "../data/us.json";

const getFromName = (name: string) => {
  return subdivisions.find((c) => c.name.toUpperCase() === name.toUpperCase());
};

const getFromCode = (code: string) => {
  return subdivisions.find((c) => c.code.toUpperCase() === code.toUpperCase());
};

const subdivision = {
  data: subdivisions,
  getFromCode,
  getFromName,
};

export { subdivision };
