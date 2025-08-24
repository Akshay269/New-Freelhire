import aboutus from "../assets/images/aboutimg.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="flex flex-col justify-center items-center text-center pt-16 text-white">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-[#ff4057] drop-shadow-lg">
          About Us
        </h1>

        {/* Image */}
        <img
          className="w-1/4 min-w-[250px] rounded-lg shadow-lg mb-8"
          src={aboutus}
          alt="About us"
        />

        {/* Text Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl w-3/4 p-6 text-lg leading-relaxed text-gray-200">
          <p>
            Freelhire is a one-roof solution for your technical requirements. We
            have a methodical team that caters to all your needs — from web
            development to logo designing — and will also support you throughout
            with digital marketing and much more. Our team of technical experts
            will provide you with a personalized experience available nowhere
            else, all within the limits of your pocket.
          </p>
        </div>
      </div>
    </div>
  );
}
