import { GetCountriesByContinentWithCountriesTypes } from "@/app/types/customTypes";
import React from "react";

const gqlWithFetchSSR = async () => {
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

  const response = await fetch("https://countries.trevorblades.com/", requestOptions);
  console.log("response::", response);
  const result: GetCountriesByContinentWithCountriesTypes = await response.json();
  console.log("result::", result);

  return (
    <div>
      <h1>GQL With Fetch in Server Component</h1>
      {result.data.continents.map((continent) => {
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

export default gqlWithFetchSSR;
