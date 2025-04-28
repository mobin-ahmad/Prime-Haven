import React from "react";
import SearchBar from "./common/SearchBar";
import StatsCard from "./common/StatsCard";
import customer from "../assets/customer-satisfaction.png"
import transaction from "../assets/transaction.png"
const SearchContainer = () => {
  return (
    <div className="bg-[#f5f6f6] w-full min-h-[60vh] h-auto py-10">
      <SearchBar />
      <div className="w-full justify-center items-center flex md:flex-row flex-col md:gap-40 lg:px-0 md:px-10 gap-10 pt-10">
        <StatsCard image={customer} heading={"400"} title={"Happy Customers"} />
        <StatsCard image={transaction} heading={"600"} title={"Deals Closed"} />
      </div>
    </div>
  );
};

export default SearchContainer;
