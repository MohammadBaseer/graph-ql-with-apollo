import { GetAllCountriesType } from "@/app/types/customTypes";
import { getClient } from "@/lib/ApolloClient";
import { GETALLCOUNTRIES } from "@/queries/countries";
import React from "react";

const allCountriesSSR = async () => {
  const { data, loading } = await getClient().query<GetAllCountriesType>({ query: GETALLCOUNTRIES });
  return (
    <div>
      <h1>All Countries in Server component </h1>
      <div>
        {loading && <h1>Loading ....</h1>}
        {data.countries.map((country) => {
          return (
            <p key={country.name}>
              {country.name} - {country.emoji} - {country.code}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default allCountriesSSR;
