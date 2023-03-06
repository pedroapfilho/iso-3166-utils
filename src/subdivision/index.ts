const subdivision = (alpha2: "us" | "br") => {
  const subdivision = require(`../data/${alpha2}.json`) as {
    name: string;
    code: string;
    category: string;
  }[];

  const getFromName = (name: string) => {
    return subdivision.find((c) => c.name.toUpperCase() === name.toUpperCase());
  };

  const getFromCode = (code: string) => {
    return subdivision.find((c) => c.code.toUpperCase() === code.toUpperCase());
  };

  return {
    getFromName,
    getFromCode,
    data: subdivision,
  };
};

export { subdivision };
