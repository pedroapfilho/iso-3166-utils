// import puppeteer from "puppeteer";
import { generateCountries } from "./countries";
import { generateSubdivision } from "./subdivision";

const run = async () => {
  const subdivisions = [
    {
      alpha2: "us",
      selector:
        "#mw-content-text > div.mw-parser-output > table:nth-child(11) > tbody > tr",
    },
    {
      alpha2: "br",
      selector:
        "#mw-content-text > div.mw-parser-output > table:nth-child(9) > tbody > tr",
    },
  ];

  const countries = {
    selector:
      "#mw-content-text > div.mw-parser-output > table:nth-child(32) > tbody > tr",
  };

  await generateCountries({
    selector: countries.selector,
  });

  for (const { alpha2, selector } of subdivisions) {
    await generateSubdivision({ alpha2, selector });
  }
};

run();
