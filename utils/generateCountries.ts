const puppeteer = require('puppeteer');
const fs = require('fs');

const SOURCE = 'https://wikipedia.org/wiki/ISO_3166-1';

type Country = {
  name: string;
  alpha2: string;
  alpha3: string;
  code: string;
};

const run = async (): Promise<void> => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(SOURCE);

  const countries: Country[] = await page.evaluate(() => {
    const rows = document.querySelectorAll(
      '#mw-content-text > div.mw-parser-output > table:nth-child(32) > tbody > tr'
    );

    const data = Array.from(rows, row => {
      const columns = row.querySelectorAll('td');

      return Array.from(columns, column =>
        column.innerText.replace(/ *\[[^\]]*]/, '')
      );
    });

    return data.map(country => ({
      name: country[0],
      alpha2: country[1],
      alpha3: country[2],
      code: country[3],
    }));
  });

  await browser.close();

  await fs.writeFile(
    './src/countries.json',
    JSON.stringify(
      countries
        .filter(country => country.name)
        .map(country => ({ ...country, name: country.name.trim() })),
      null,
      4
    ),
    (err: Error) => {
      if (err) throw err;
    }
  );
};

run();
