"use client";

import { useRouter } from "next/navigation";

const SelectContinent = () => {
  const router = useRouter();
  return (
    <select
      name="continent"
      id="continent"
      onChange={(e) => {
        router.push(`?continent=${e.target.value}`);
      }}
    >
      <option value="EU">Europe</option>
      <option value="AF">Africa</option>
      <option value="AS">Asia</option>
    </select>
  );
};

export default SelectContinent;
