"use client";
import { GetAllCountriesType } from "@/app/types/customTypes";
import { GETALLCOUNTRIES } from "@/queries/countries";
import { useQuery, useSuspenseQuery } from "@apollo/client";

const allCountriesCSR = () => {
  //   const { data, loading, error } = useQuery<GetAllCountriesType>(GETALLCOUNTRIES);
  const { data, error } = useSuspenseQuery<GetAllCountriesType>(GETALLCOUNTRIES);
  console.log("data", data);
  return (
    <div>
      <h1>All Countries in Client component </h1>
      <div>
        {/* {loading && <h1>Loading ....</h1>} */}
        {data?.countries.map((country) => {
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

export default allCountriesCSR;
