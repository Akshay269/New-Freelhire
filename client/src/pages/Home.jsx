import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/Card/card";
import wave1 from "../assets/bg.jpg";
import "../components/Card/style.css";
import cardbg from "../assets/cardbg.jpg";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Typewriter from "../utils/TypeWriter";

export default function Home() {
  const img1 = () => {
    document.getElementById("hero").style.backgroundImage = `url(${wave1})`;
    document.getElementById("hero").style.transition = "ease-in-out 1s";
  };

  const img2 = () => {
    document.getElementById("hero").style.backgroundImage = `url(${wave1})`;
    document.getElementById("hero").style.transition = "ease-in-out 1s";
  };

  const originalImg = () => {
    document.getElementById("hero").style.backgroundImage = `url(${wave1})`;
    document.getElementById("hero").style.transition = "ease-in-out 1s";
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center px-4"
        id="hero"
      >
        <div className="w-full h-screen bg-cover bg-center flex items-center justify-between">
          <div className="w-3/4">
            <div className=" p-1  text-white text-4xl">
              <h1 className="m-2 whitespace-pre-wrap">
                <Typewriter
                  text={`Welcome to FreelHire 
We believe in Innovation`}
                  delay={50}
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
