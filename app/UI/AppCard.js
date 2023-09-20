"use client";
import Image from "next/image";
import { useState } from "react";
import { getTechIcon } from "../util/iconsLink";

export default function AppCard({ name, info, githubLink, demo, tech, img }) {
  const [showSkills, setshowSkills] = useState(false);

  return (
    <div className="w-[35rem] m-0 h-[45rem] flex flex-col rounded  gap-2">
      <div className="relative h-[30rem] w-[35rem] rounded">
        {showSkills ? (
          <div className="flex justify-center items-center align-center gap-3 h-[300px]">
            {tech.map((tech) => {
              const iconLink = getTechIcon(tech);
              return iconLink ? (
                <Image src={iconLink} alt={tech} width={70} height={70} />
              ) : (
                <span>{tech}</span>
              );
            })}
          </div>
        ) : (
          <Image src={img} fill={true} className="rounded"></Image>
        )}
      </div>
      <div className="flex items-center">
        <p className="text-4xl text-black font-bold text-left "> {name}</p>
        <a
          className="text-xs mr-8 bg-orange rounded-lg p-1.5 text-white self-end mb-[0.3rem] ml-2"
          onMouseEnter={() => setshowSkills(true)}
          onMouseOut={() => setshowSkills(false)}
        >
          View tech stack
        </a>
      </div>
      <p className="italic text-left grow"> {info}</p>
      <div className="flex justify-between">
        <a
          className="bg-sand w-[250px] py-3 rounded drop-shadow-md"
          href={githubLink}
        >
          View source code
        </a>
        <a
          className="bg-orange w-[250px] py-3 rounded drop-shadow-md"
          href={demo}
        >
          View app
        </a>
      </div>
    </div>
  );
}
