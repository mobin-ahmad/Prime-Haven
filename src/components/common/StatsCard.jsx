const StatsCard = ({image,heading,title}) => {
    return (
      <div className="w-[300px] bg-white shadow-2xl  rounded-xl p-6 text-center space-y-5 py-10">
        <div className="flex justify-center text-4xl text-orange-600">
          {/* Replace with an icon of your choice, e.g., from Heroicons, Lucide, or an image */}
          <img src={image} alt="Customers Icon" className="w-12 h-12" />
        </div>
        <div className="text-5xl font-bold text-[#161e2d]">
          {heading} <span className="text-5xl">+</span>
        </div>
        <hr className="border-t border-gray-200 w-full mx-auto" />
        <h6 className="text-gray-700 font-medium font-sans">{title}</h6>
      </div>
    );
  };
  
  export default StatsCard;
  