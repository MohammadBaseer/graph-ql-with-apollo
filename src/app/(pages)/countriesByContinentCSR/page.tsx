"use client";
import { GetAllCountriesType } from "@/app/types/customTypes";
import SelectContinent from "@/Components/SelectContinent/SelectContinent";
import { GETCOUNTRIESBYCONTINENT } from "@/queries/countries";
import { useSuspenseQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const countriesByContinentCSR = () => {
  const searchParams = useSearchParams().get("continent");
  const { data } = useSuspenseQuery<GetAllCountriesType>(GETCOUNTRIESBYCONTINENT, {
    variables: {
      filter: { continent: { eq: searchParams } },
    },
  });
  return (
    <div>
      <h1>All Countries By Continent in Client component </h1>
      <SelectContinent />
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
