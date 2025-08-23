import Navbar from "../components/navbar";
import wave1 from "../assets/images/bg.jpg";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import Typewriter from "../utils/TypeWriter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center px-4"
        id="hero"
        style={{ backgroundImage: `url(${wave1})` }}
      >
        <div className="w-full h-screen bg-cover bg-center flex items-center justify-between">
          <div className="w-full md:w-3/4 px-4">
            <div className="p-4 text-white text-2xl md:text-4xl lg:text-5xl">
              <h1 className="m-2 whitespace-pre-wrap">
                <Typewriter
                  text={`Welcome to FreelHire 
We believe in Innovation`}
                  delay={100}
                />
                <br />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-end px-4">
        <InfoCard />
      </div>
      <Footer />
    </>
  );
}
