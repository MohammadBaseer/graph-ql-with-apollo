export type GetCountriesByContinentWithCountriesTypes = {
  data: {
    continents: ContinentType[];
  };
};
export type ContinentType = {
  name: string;
  countries: CountryTypes[];
};
export type CountryTypes = {
  name: string;
  capital: string;
  code: string;
};

export type GetAllCountriesType = {
  countries: [
    {
      name: string;
      code: string;
      emoji: string;
    }
  ];
};
