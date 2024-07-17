"use client";
import { GetCountriesByContinentWithCountriesTypes } from "@/app/types/customTypes";
import React, { useEffect, useState } from "react";

const GQLWithFetchCSR = () => {
  const [continents, setContinents] = useState<GetCountriesByContinentWithCountriesTypes | null>(null);

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
      query: "query{\r\n  continents{\r\n    name\r\n    countries{\r\n        name\r\n        capital\r\n        code\r\n    }\r\n  }\r\n}",
      variables: {},
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
    };

    try {
      const response = await fetch("https://countries.trevorblades.com/", requestOptions);
      console.log("response::", response);
      const result = (await response.json()) as GetCountriesByContinentWithCountriesTypes;
      setContinents(result);
      console.log("result::", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>GQL With Fetch in Client Component</h1>
      {continents?.data.continents.map((continent) => {
        return (
          <div key={continent.name}>
            <p>
              <strong>Name: {continent.name}</strong>
            </p>
            <div>
              {continent.countries.map((country) => {
                return (
                  <p key={country.name}>
                    {" "}
                    - {country.name} - {country.capital}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GQLWithFetchCSR;
