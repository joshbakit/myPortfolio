import React from "react";
import {
  RiReactjsLine,
  RiNextjsFill,
  RiTailwindCssFill,
  RiHtml5Line,
  RiCss3Fill,
  RiJavascriptFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";

const Skills = () => {
  return (
    <div className="min-h-screen" id="skill">
      <div className="divider divider-neutral"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-18 text-white py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="tooltip hover:scale-110" data-tip="ReactJs">
            <RiReactjsLine fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="NextJs">
            <RiNextjsFill fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="TailwindCss">
            <RiTailwindCssFill fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="HTML5">
            <RiHtml5Line fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="CSS3">
            <RiCss3Fill fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="Javascript">
            <RiJavascriptFill fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="VisualStudioCode">
            <SiVisualstudiocode fontSize={100} />
          </div>
          <div className="tooltip hover:scale-110" data-tip="Github">
            <RiGithubFill fontSize={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
