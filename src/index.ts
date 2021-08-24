import { Country, US } from "./types";
import countries from "./data/countries.json";
import {
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
} from "./countries";
import us from "./data/us.json";
import { getUSFromCode, getUSFromName } from "./subdivisions/us";

const subdivisions = {
  us,
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
