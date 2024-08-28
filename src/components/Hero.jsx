import React from "react";
import SocialMediaComponentsForHero from "./SocialMediaComponentsForHero";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../assets/Joshua Benas Resume 4-24-24.pdf"

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen" id="#">
        <div className="hero-content gap-30 lg:gap-52  flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/avatar.png"
            className="max-w-sm md:max-w-md rounded-lg shadow-2xl"
          />
          <div className="text-start">
            <h1 className="text-5xl font-bold text-start">Joshua Benas</h1>
            <p className="py-6 text-start text-pretty">
              Aspiring Tech Developer.
              <br />
              Passionate about creating innovative solutions.
              <br />
              Help and create helpfull tech tools to make life easier.
            </p>
            <SocialMediaComponentsForHero />
            <a href={CV} download="/src/assets/Joshua_Benas_Resume 4-24-24.pdf">
            <button className="btn btn-primary">
              Download CV <AiOutlineDownload fontSize={20} />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
