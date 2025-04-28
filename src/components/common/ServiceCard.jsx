import React from "react";
const ServiceCard = ({image,content,heading}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[350px] gap-4">
      <img src={image} className="w-[25%]" />
      <h1 className="text-center text-[1.7rem] font-semibold">{heading}</h1>
      <p className="text-gray-600 text-lg text-center">
       {content}
      </p>
      <button className="border px-6 text-gray-800 text-xl font-semibold py-[7px] rounded-md hover:bg-[#974216] hover:text-white transition-all duration-700 cursor-pointer">
        Learn more
      </button>
    </div>
  );
};

export default ServiceCard;
