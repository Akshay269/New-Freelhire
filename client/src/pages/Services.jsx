import React from "react";
import Navbar from "../components/navbar";
import "../styles/index.css";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import logoDes from "../assets/logo-design.png";
import graphicDes from "../assets/graphic-design.jpg";
import digiMark from "../assets/digital-marketing.png";
import contentCreation from "../assets/content-creation.png";


export default function Services() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="servicesbg p-16">
        <div className="title text-left pt-16 text-4xl text-white">
          <h1 className="m-2 p-2 emph">Our Services</h1>
          <p className="text-2xl m-2 p-2">
            All of our services hinge around our promise of delivering brand
            awareness, traffic and leads by bringing content, marketing and
            sales together. Each of our Business Hubs feed into whichever
            digital marketing service that you require. Our innovative approach
            ensures that your business – whether small or large – receives
            perfectly tailored strategic insight and added value. They are the
            axis around which everything else revolves.
          </p>
        </div>

        <div class="services flex md:flex-row sm:flex-col flex-wrap mt-16 content-center">
          <TeamCard
            img={digiMark}
            title="Digital Marketing"
            body="Want your buisness to be acclaimed? Broadcast your business to
                every inch of the globe with our digital marketing team."
          />
          <TeamCard
            img={contentCreation}
            title="Content Creation"
            body="Confused about how to start your write-up? Let our experts glide
            in and take over with creativity."
          />
          <TeamCard
            img={logoDes}
            title="Logo Designing"
            body="Don't have an identity for your idea? Give a face to your ideas
            with a whole new personalised designing experience."
          />

          <TeamCard
            img={graphicDes}
            title="Graphic Designing"
            body="looking for a graphical experience? Let us take over and animate
            your imagnation into a product."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
