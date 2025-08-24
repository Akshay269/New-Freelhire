import TeamCard from "../components/TeamCard";
import logoDes from "../assets/images/logo-design.png";
import graphicDes from "../assets/images/graphic-design.jpg";
import digiMark from "../assets/images/digital-marketing.png";
import contentCreation from "../assets/images/content-creation.png";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          All of our services hinge around our promise of delivering brand
          awareness, traffic and leads by bringing content, marketing and sales
          together. Our innovative approach ensures that your business – whether
          small or large – receives perfectly tailored strategic insight and
          added value.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <TeamCard
          img={digiMark}
          title="Digital Marketing"
          body="Broadcast your business to every corner of the globe with our expert digital marketing team."
        />
        <TeamCard
          img={contentCreation}
          title="Content Creation"
          body="Let our creative experts craft compelling content that engages and converts."
        />
        <TeamCard
          img={logoDes}
          title="Logo Designing"
          body="Give your idea a unique identity with a personalized logo design experience."
        />
        <TeamCard
          img={graphicDes}
          title="Graphic Designing"
          body="Transform your imagination into stunning visuals with our design expertise."
        />
      </div>
    </div>
  );
}
