import puppeteer from "puppeteer";
import { writeFile, unlink, existsSync } from "fs";

const SOURCE = "https://wikipedia.org/wiki/ISO_3166-1";

const FILE_PATH = "./src/data/countries.json";

const generateCountries = async ({
  selector,
}: {
  selector: string;
}): Promise<void> => {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(SOURCE, { waitUntil: "networkidle0" });

    const raw = await page.evaluate(
      ({ selector }) => {
        const rows = document.querySelectorAll(selector);

        const data = Array.from(rows, (row) => {
          const columns = row.querySelectorAll("td");

          return Array.from(columns, (column) =>
            column.innerText.replace(/ *\[[^\]]*]/, "")
          );
        });

        return data.map((country) => ({
          name: country[0],
          alpha2: country[1].toUpperCase(),
          alpha3: country[2].toUpperCase(),
          code: country[3].toUpperCase(),
        }));
      },
      { selector }
    );

    await browser.close();

    const countries = raw
      .filter((country) => country.name)
      .map((country) => ({ ...country, name: country.name.trim() }));

    if (countries.length === 0) {
      throw new Error("No countries found");
    }

    if (existsSync(FILE_PATH)) {
      unlink(FILE_PATH, (err) => {
        if (err) throw err;
      });
    }

    writeFile(FILE_PATH, JSON.stringify(countries, null, 2), (err) => {
      if (err) throw err;
    });
  } catch (error) {
    throw error;
  }
};

export { generateCountries };
