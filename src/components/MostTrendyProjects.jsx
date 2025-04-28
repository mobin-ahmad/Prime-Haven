import React, { useState } from "react";
import PropertyCard from "./common/PropertyCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";
const MostTrendyProjects = () => {
  const categories = [
    "View All",
    "Apartment",
    "PentHouse",
    "Duplex",
    "Villa",
    "Townhouse",
    "Mansion",
    "SkyVilla",
  ];

  const Projects = [
    {
      id: 1,
      categories: "Apartment",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project1,
      tag: "Pre Sale",
    },
    {
      id: 2,
      categories: "Apartment",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project2,
      tag: "Pre Sale",
    },
    {
      id: 3,
      categories: "PentHouse",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project3,
      tag: "Pre Sale",
    },
    {
      id: 4,
      categories: "Apartment",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project4,
      tag: "Pre Sale",
    },
    {
      id: 5,
      categories: "Duplex",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project5,
      tag: "Pre Sale",
    },
    {
      id: 6,
      categories: "Villa",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project6,
      tag: "Pre Sale",
    },
    {
      id: 7,
      categories: "Townhouse",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project7,
      tag: "Pre Sale",
    },
    {
      id: 8,
      categories: "Mansion",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project8,
      tag: "Pre Sale",
    },
    {
      id: 9,
      categories: "SkyVilla",
      prices: "AED2.16M",
      completition: "31-12-2029",
      developer: "Damac",
      name: "SeaCrest",
      location: "Maritime city, Dubai",
      image: project9,
      tag: "Pre Sale",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("View All");
  

  const filterData = Projects.filter((project) => {
    if (selectedFilter === "View All" || selectedFilter === "") {
      return true; // show all projects
    }
    return project.categories === selectedFilter; // match selected category
  });
  

  return (
    <div className="w-full min-h-screen h-auto py-10 bg-[#f5f6f6] pt-10">
      {/* FILTER SECTION */}
      <div className="filterSection flex flex-col justify-center items-center">
        <h4 className="text-[#974216] text-sm pb-1 font-semibold uppercase tracking-widest">
          We Always Choose the Best for You
        </h4>
        <h1 className="text-black md:text-5xl text-4xl font-normal mt-1">
          Most Trendy Projects
        </h1>
        <div className="filterButtons flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((btn) => {
            return (
              <button
                onClick={() => setSelectedFilter(btn)}
                className={` ${
                  selectedFilter == btn
                    ? "bg-[#974216] text-white"
                    : "bg-[#e4e4e4] text-[#161e2d] hover:bg-[#974216] hover:text-white transition-all duration-500"
                } cursor-pointer py-2 px-4 rounded-sm text-xs font-semibold`}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className=" w-full px-5 gap-5 grid xl:grid-cols-3 md:grid-cols-2  pt-10">
          {filterData.map((project) => {
            return (
              <PropertyCard
                category={project.categories}
                completition={project.completition}
                developer={project.developer}
                image={project.image}
                location={project.location}
                name={project.name}
                price={project.prices}
                tag={project.tag}
                key={project.id}
              />
            );
          })}
        </div>
        <button className="bg-[#974216] text-white px-4 py-3 rounded-sm text-sm font-semibold mt-8">Discover More</button>
      </div>
    </div>
  );
};

export default MostTrendyProjects;
