"use client";
import { GetAllCountriesType } from "@/app/types/customTypes";
import { GETCOUNTRIESBYCONTINENT } from "@/queries/countries";
import { useSuspenseQuery } from "@apollo/client";
import React, { useState } from "react";

const countriesByContinentCSR = () => {
  const [selectedContinent, setSelectedContinent] = useState("EU");

  const { data } = useSuspenseQuery<GetAllCountriesType>(GETCOUNTRIESBYCONTINENT, {
    variables: {
      filter: { continent: { eq: selectedContinent } },
    },
  });
  return (
    <div>
      <h1>All Countries By Continent in Client component </h1>
      <select
        name="continent"
        id="continent"
        onChange={(e) => {
          setSelectedContinent(e.target.value);
        }}
      >
        <option value="EU">Europe</option>
        <option value="AF">Africa</option>
        <option value="AS">Asia</option>
      </select>
      <div>
        {/* {loading && <h1>Loading ....</h1>} */}
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

export default countriesByContinentCSR;
