const Team = ({ img, title, body }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-5 flex justify-center">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center">
        {/* Image */}
        <div className="mb-3">
          <img
            className="h-44 w-44 mx-auto object-cover rounded-full border-4 border-gray-200"
            src={img}
            alt={title}
          />
        </div>

        {/* Content */}
        <div>
          <h5 className="text-xl font-semibold text-gray-800">{title}</h5>
          <p className="text-gray-600 text-sm mt-2">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
