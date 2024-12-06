import puppeteer from "puppeteer";
import { existsSync, unlink, writeFile } from "fs";

const BASE_SOURCE = "https://wikipedia.org/wiki/ISO_3166-2";

const generateSubdivision = async ({
  alpha2,
  selector,
}: {
  alpha2: string;
  selector: string;
}): Promise<void> => {
  try {
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

    const subdivisions = raw
      .filter((state) => state?.name)
      .map((state) => ({ ...state, name: state?.name.trim() }));

    if (subdivisions.length === 0) {
      throw new Error(`No subdivisions found for ${alpha2}`);
    }

    const FILE_PATH = `./src/data/${alpha2.toLowerCase()}.json`;

    if (existsSync(FILE_PATH)) {
      unlink(FILE_PATH, (err) => {
        if (err) throw err;
      });
    }

    writeFile(FILE_PATH, JSON.stringify(subdivisions, null, 2), (err) => {
      if (err) throw err;
    });
  } catch (error) {
    throw error;
  }
};

export { generateSubdivision };
