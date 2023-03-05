import puppeteer from "puppeteer";
import { writeFile } from "fs";

const SOURCE = "https://wikipedia.org/wiki/ISO_3166-1";

type Country = {
  name: string;
  alpha2: string;
  alpha3: string;
  code: string;
};

const countries = async (): Promise<void> => {
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

  const countries = raw
    .filter((country) => country.name)
    .map((country) => ({ ...country, name: country.name.trim() }));

  await writeFile(
    "./src/data/countries.json",
    JSON.stringify(countries, null, 4),
    (err) => {
      if (err) throw err;
    }
  );
};

export type { Country };

export { countries };
