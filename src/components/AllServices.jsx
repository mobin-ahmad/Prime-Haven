import React from "react";
import ServiceCard from "./common/ServiceCard";
import image1 from "../assets/firstService.png"
import image2 from "../assets/secondService.png"
import image3 from "../assets/thirdService.png"
import image4 from "../assets/fourthService.png"
import image5 from "../assets/fifthService.png"
import image6 from "../assets/sixService.png"
const AllServices = () => {
const services = [
  {
    id:1,
    heading:"BUYING",
    content:"Find your dream property with our expert guidance & a wide selection of options.",
    image:image1
  },
  {
    id:2,
    heading:"LEASING",
    content:"Secure flexible lease options tailored to your lifestyle and business needs.",
    image:image2
  },
  {
    id:3,
    heading:"OFFPLAN",
    content:"Invest in future-ready developments from trusted developers.",
    image:image3
  },
  {
    id:4,
    heading:"SELL WITH US",
    content:"Maximize your property's value with our professional sales services.",
    image:image4
  },
  {
    id:5,
    heading:"RENT WITH US",
    content:"Quickly find reliable tenants or the perfect rental property.",
    image:image5
  },
  {
    id:6,
    heading:"MORTGAGE INFO",
    content:"Invest in future-ready developments from trusted developers.",
    image:image6
  },
]

  return (
    <div className="w-full min-h-screen h-auto py-10 bg-[#f5f6f6] pt-10">
      {/* FILTER SECTION */}
      <div className="filterSection flex flex-col justify-center items-center">
        <h4 className="text-[#974216] text-sm pb-1 font-semibold uppercase tracking-widest">
          What We Offer
        </h4>
        <h1 className="text-black text-5xl font-normal mt-1">Our Services </h1>
      </div>
      <div className="flex flex-wrap lg:mx-20 justify-center  lg:gap-20 gap-10 mt-10">
      {
        services.map((data,index) =>{
          return(
            <ServiceCard key={index} content={data.content} heading={data.heading} image={data.image} />
          )
        })
      }
       
      </div>
    </div>
  );
};

export default AllServices;
