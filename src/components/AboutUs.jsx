import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-[70vh] h-auto bg-center bg-cover relative bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: "url('/src/assets/AboutUs.jpg')" }}
    >
      <div className="w-full h-full bg-black/50 py-10 absolute z-10"></div>
      <div className="py-5 w-full h-full relative z-20 flex justify-center md:items-start items-center flex-col px-5 md:px-20">
        {/* Adjust padding for larger screens */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white pb-6 text-center md:text-left">
          About Us
        </h1> {/* Adjust font size for different screen sizes */}
        <p className="w-full md:w-[640px] tracking-wider text-white text-lg sm:text-xl italic text-center md:text-left">
          {/* Ensure text is responsive */}
          Why Terra Nest Properties? <br /> At Terra Nest Properties, we combine deep
          market expertise with a passion for delivering personalized service.
          Whether you’re buying, selling, renting, or investing, our dedicated
          team is here to provide a smooth, hassle-free experience, supporting
          you every step of the way on your real estate journey.
        </p>
        <button className="text-white w-[150px] sm:w-[180px] mt-6 hover:bg-white hover:text-[#974216] hover:border-white cursor-pointer duration-500 border py-2">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
