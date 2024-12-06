import { generateCountries } from "./countries";
import { generateSubdivision } from "./subdivision";

const run = async () => {
  try {
    const subdivisions = [
      {
        alpha2: "us",
        selector:
          "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.wikitable.sortable.jquery-tablesorter > tbody > tr",
      },
      {
        alpha2: "br",
        selector:
          "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.wikitable.sortable.jquery-tablesorter > tbody > tr",
      },
    ];

    const countries = {
      selector:
        "#mw-content-text > div.mw-parser-output > table.wikitable.sortable.sticky-header.jquery-tablesorter > tbody > tr",
    };

    await generateCountries({
      selector: countries.selector,
    });

    Promise.all(
      subdivisions.map(async ({ alpha2, selector }) => {
        await generateSubdivision({ alpha2, selector });
      })
    );

    console.log("Data generated");
  } catch (error) {
    console.error(error);
  }
};

run();
