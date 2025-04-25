import React from "react";
import SearchBar from "./common/SearchBar";
import StatsCard from "./common/StatsCard";
import customer from "../assets/customer-satisfaction.png"
import transaction from "../assets/transaction.png"
const SearchContainer = () => {
  return (
    <div className="bg-[#f5f6f6] w-full h-[100vh]">
      <SearchBar />
      <div className="w-full justify-center items-center flex md:flex-row flex-col gap-40 pt-10">
        <StatsCard image={customer} heading={"400"} title={"Happy Customers"} />
        <StatsCard image={transaction} heading={"600"} title={"Deals Closed"} />
      </div>
    </div>
  );
};

export default SearchContainer;
