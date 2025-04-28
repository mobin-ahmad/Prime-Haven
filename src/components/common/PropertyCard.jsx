import { FaMapMarkerAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function PropertyCard({
  tag,
  category,
  location,
  name,
  price,
  completition,
  image,
  developer,
}) {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative group overflow-hidden">
        <img
          className="w-full h-60 object-cover transition-all duration-1000 group-hover:scale-105"
          src={image}
          alt="SeaCrest Building"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            {tag}
          </span>
          <span className="bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            {category}
          </span>
        </div>

        <div className="absolute top-2 right-2">
          <button className="bg-[#0b213266] p-2 rounded-full shadow hover:bg-[#8C3B10] transition-all duration-500 cursor-pointer">
            <CiHeart color="#fff" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-1 text-center">{name}</h2>
        <div className="flex items-center justify-center text-gray-500 mb-4 text-sm">
          <FaMapMarkerAlt className="mr-1" />
          {location}
        </div>

        <div className="border-t border-gray-200 py-4 flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Price from:</p>
            <p className="font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-gray-500">Completion Date:</p>
            <p className="font-semibold">{completition}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-2 text-sm text-gray-500">
          <p>
            <span className="font-semibold text-gray-700">Developer:</span>{" "}
            {developer}
          </p>
        </div>
      </div>
    </div>
  );
}
