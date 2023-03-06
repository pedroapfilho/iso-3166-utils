import puppeteer from "puppeteer";
import { writeFile } from "fs";

const BASE_SOURCE = "https://wikipedia.org/wiki/ISO_3166-2";

const generateSubdivision = async ({
  alpha2,
  selector,
}: {
  alpha2: string;
  selector: string;
}): Promise<void> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${BASE_SOURCE}:${alpha2.toUpperCase()}`, {
    waitUntil: "networkidle0",
  });

  const raw = await page.evaluate(
    ({ selector }) => {
      const rows = document.querySelectorAll(selector);

      const data = Array.from(rows, (row) => {
        const columns = row.querySelectorAll("td");

        return Array.from(columns, (column) =>
          column.innerText.replace(/ *\[[^\]]*]/, "")
        );
      });

      return data.map((state) => {
        return {
          code: state[0]?.includes("-") ? state[0].split("-")[1] : state[0],
          name: state[1],
          category: state[2].toLowerCase(),
        };
      });
    },
    { selector }
  );

  await browser.close();

  const subdivision = raw
    .filter((state) => state?.name)
    .map((state) => ({ ...state, name: state?.name.trim() }));

  await writeFile(
    `./src/data/${alpha2.toLowerCase()}.json`,
    JSON.stringify(subdivision, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
};

export { generateSubdivision };
