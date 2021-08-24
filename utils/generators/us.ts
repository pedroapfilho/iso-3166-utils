import puppeteer from "puppeteer";
import { writeFile } from "fs";

const SOURCE = "https://wikipedia.org/wiki/ISO_3166-2:US";

type State = {
  name: string;
  code: string;
  category: string;
};

const run = async (): Promise<void> => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(SOURCE);

  const states: State[] = await page.evaluate(() => {
    const rows = document.querySelectorAll(
      "#mw-content-text > div.mw-parser-output > table:nth-child(13) > tbody > tr"
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

  await writeFile(
    "./src/data/us.json",
    JSON.stringify(
      states
        .filter((state) => state.name)
        .map((state) => ({ ...state, name: state.name.trim() })),
      null,
      4
    ),
    (err) => {
      if (err) throw err;
    }
  );
};

run();
