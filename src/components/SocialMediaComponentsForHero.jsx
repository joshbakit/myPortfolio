import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const SocialMediaComponentsForHero = () => {
  return (
    <div>
      <nav className="flex gap-4 md:place-self-center md:justify-self-end pb-6">
        <a className="text-xl cursor-pointer hover:scale-110">
          <AiOutlineInstagram fontSize={30} />
        </a>
        <a className="text-xl cursor-pointer hover:scale-110">
          <AiFillLinkedin fontSize={30} />
        </a>
        <a className="text-xl cursor-pointer hover:scale-110">
          <AiOutlineGithub fontSize={30} />
        </a>
        <a className="text-xl cursor-pointer hover:scale-110">
          <AiFillYoutube fontSize={30} />
        </a>
        <a className="text-xl cursor-pointer hover:scale-110">
          <BiLogoGmail fontSize={30} />
        </a>
      </nav>
    </div>
  );
};

export default SocialMediaComponentsForHero;
