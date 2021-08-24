import { Country, US } from "./types";
import rawCountries from "./data/countries.json";
import {
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
} from "./countries";
import rawUS from "./data/us.json";
import { getUSFromCode, getUSFromName } from "./subdivisions/us";

const countries = rawCountries;

const subdivisions = {
  us: rawUS,
};

export {
  Country,
  countries,
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
  subdivisions,
  US,
  getUSFromCode,
  getUSFromName,
};
