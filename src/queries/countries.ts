import { gql } from "@apollo/client";

export const GETALLCOUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
      code
      emoji
    }
  }
`;

export const GETCOUNTRIESBYCONTINENT = gql`
  query GetCountriesByContinent($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      emoji
      code
    }
  }
`;
