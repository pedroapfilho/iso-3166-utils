import puppeteer from "puppeteer";
import { countries, Country } from "./countries";
import { subdivision } from "./subdivision";

const SOURCE = "https://wikipedia.org/wiki/ISO_3166-1";

const getSubdivisions = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(SOURCE);

  const raw: Country[] = await page.evaluate(() => {
    const rows = document.querySelectorAll(
      "#mw-content-text > div.mw-parser-output > table:nth-child(32) > tbody > tr"
    );

    const data = Array.from(rows, (row) => {
      const columns = row.querySelectorAll("td");

      return Array.from(columns, (column) =>
        column.innerText.replace(/ *\[[^\]]*]/, "")
      );
    });

    return data.map((country) => ({
      name: country[0],
      alpha2: country[1],
      alpha3: country[2],
      code: country[3],
    }));
  });

  await browser.close();

  const subdivisions = raw.filter((country) => country.name);

  return subdivisions.map((country) => country.alpha2);
};

const run = async () => {
  const subdivisions = await getSubdivisions();

  await countries();

  for (const alpha2 of subdivisions) {
    await subdivision({ alpha2 });
  }
};

run();
