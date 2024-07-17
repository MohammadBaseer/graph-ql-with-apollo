"use client";

import { useCountriesBeginWithTheLetterAQuery } from "@/graphql/__generated__/Countries";

const countriesWithLetter = () => {
  const { data, loading } = useCountriesBeginWithTheLetterAQuery();
  return (
    <div>
      {data?.countries.map((country) => {
        return (
          <p key={country.code}>
            {country.name} - {country.currency} - {country.code}
          </p>
        );
      })}
    </div>
  );
};

export default countriesWithLetter;
