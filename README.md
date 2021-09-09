<h1 align="center">Welcome to iso-3166-utils 👋</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/iso-3166-utils"><img alt="NPM version" src="https://img.shields.io/npm/v/iso-3166-utils"></a>
  <a href="https://bundlephobia.com/result?p=iso-3166-utils"><img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/iso-3166-utils"></a>
  <img alt="MIT" src="https://img.shields.io/github/license/pedroapfilho/iso-3166-utils">
</p>

> A helper to get country codes following the <a href="https://www.iso.org/glossary-for-iso-3166-utils.html">ISO 3316</a>

## Install

```sh
npm install iso-3166-utils

or

yarn add iso-3166-utils
```

## Usage

This is the `Country` type:

```ts
type Country = {
  name: string;
  alpha2: string;
  alpha3: string;
  code: string;
};
```

And this is the subdivision `US` type:

```ts
type US = {
  name: string;
  code: string;
  category: string;
};
```

You can get all the countries just calling

```js
import { country } from "iso-3166-utils";

const countries = country.data;
```

You can get a country by its name with `getFromName`:

```js
import { country } from "iso-3166-utils";

const US = country.getFromName("United States of America");
```

You can get a country by its alpha2 value with `getFromAlpha2`:

```js
import { country } from "iso-3166-utils";

const US = country.getFromAlpha2("US");
```

You can get a country by its alpha3 value with `getFromAlpha3`:

```js
import { country } from "iso-3166-utils";

const US = country.getFromAlpha3("USA");
```

You can get a country by its code with `getFromAlpha3`:

```js
import { country } from "iso-3166-utils";

const US = country.getFromCode("840");
```

And you can have the same for subdivisions, like `AK`:

```js
import { subdivision } from "iso-3166-utils";

const AK = subdivision.us.getFromCode("AK");
```

Or you can get it from the name:

```js
import { subdivision } from "iso-3166-utils";

const AK = subdivision.us.getFromName("Alaska");
```

You can find a full list of countries from the <a href="https://en.wikipedia.org/wiki/ISO_3166-1">source</a>

You can find a full list of subdivisions from the <a href="https://en.wikipedia.org/wiki/ISO_3166-2">source</a>

## Author

👤 **Pedro Filho <pedro@filho.me>**

- Twitter: [@pedrofilhome](https://twitter.com/pedrofilhome)
- Github: [@pedroapfilho](https://github.com/pedroapfilho)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/pedroapfilho/iso-3166-utils/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/khcUAVF" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

```

```
