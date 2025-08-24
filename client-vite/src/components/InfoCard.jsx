import { Link } from "react-router-dom";
import img from "../assets/images/infocard.jpeg";

const InfoCard = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-11/12 md:w-4/5 lg:w-3/4">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={img}
            alt="Business growth illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 bg-gray-50">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Worried about your growth?
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Let’s prosper together.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Quality is our top most priority.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
