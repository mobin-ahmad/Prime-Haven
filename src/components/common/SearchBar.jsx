import React, { useState } from "react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Apartment", "Penthouse", "Duplex"];

  const handleSearch = () => {
    console.log("Search:", { keyword, location, category });
  };

  return (
    <div className="flex flex-col md:flex-row relative mx-auto bg-white  max-w-5xl rounded-tl-2xl rounded-tr-2xl w-full shadow-md ">
      <div className="flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-4 w-full md:w-[87%]">
        {/* Keyword */}
        <div className="flex-1">
          <label className="text-sm md:text-md px-2 font-semibold text-gray-700">
            Keyword
          </label>
          <input
            type="text"
            placeholder="Search project or developer"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full mt-1 p-2 placeholder:text-[#161e2d] placeholder:text-base md:placeholder:text-lg text-base md:text-lg font-normal outline-none border-b-2 md:border-none border-gray-200"
          />
        </div>

        {/* Location */}
        <div className="flex-1 md:border-l-2 border-[#f1f1f1] px-0 md:px-4">
          <label className="text-sm md:text-md px-2 font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            placeholder="Search For Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mt-1 p-2 placeholder:text-[#161e2d] placeholder:text-base md:placeholder:text-lg text-base md:text-lg font-normal outline-none border-b-2 md:border-none border-gray-200"
          />
        </div>

        {/* Category */}
        <div className="flex-1 md:border-l-2 border-[#f1f1f1] px-0 md:px-4">
          <label className="text-sm md:text-md px-2 font-semibold text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 p-2 placeholder:text-[#161e2d] placeholder:text-base md:placeholder:text-lg text-base md:text-lg font-normal outline-none border-b-2 md:border-none border-gray-200"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="xl:rounded-tr-2xl bg-[#8C3B10] text-white w-full md:w-[14%] py-3 md:py-2 px-4 font-semibold hover:bg-[#6e2f0c] transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;