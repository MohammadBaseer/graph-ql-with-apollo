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
