import puppeteer from "puppeteer";
import { writeFile } from "fs";

const BASE_SOURCE = "https://wikipedia.org/wiki/ISO_3166-2";

type SubDivision = {
  name: string;
  code: string;
  category: string;
};

const subdivision = async ({ alpha2 }: { alpha2: string }): Promise<void> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${BASE_SOURCE}:${alpha2.toUpperCase()}`);

  const raw: SubDivision[] = await page.evaluate(() => {
    const rows = document.querySelectorAll(
      "#mw-content-text > div.mw-parser-output > table:nth-child(11) > tbody > tr"
    );

    const data = Array.from(rows, (row) => {
      const columns = row.querySelectorAll("td");

      return Array.from(columns, (column) =>
        column.innerText.replace(/ *\[[^\]]*]/, "")
      );
    });

    return data.map((state) => ({
      code: state[0].split("-")[1],
      name: state[1],
      category: state[2],
    }));
  });

  await browser.close();

  const subdivision = raw
    .filter((state) => state.name)
    .map((state) => ({ ...state, name: state.name.trim() }));

  await writeFile(
    `./src/data/${alpha2.toLowerCase()}.json`,
    JSON.stringify(subdivision, null, 4),
    (err) => {
      if (err) throw err;
    }
  );
};

export { subdivision };
