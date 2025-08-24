const ServiceCard = ({ title, body }) => {
  return (
    <div className="m-5">
      <div className="relative group bg-gray-900 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Background circle effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none"></div>

        {/* Card content */}
        <h4 className="relative z-10 text-2xl font-bold mb-3">{title}</h4>
        <p className="relative z-10 text-sm text-gray-200">{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
