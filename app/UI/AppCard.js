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
          <div className="flex justify-center items-center align-center gap-3 h-[100%] flex-wrap ">
            {tech.map((tech) => {
              const iconLink = getTechIcon(tech);
              return iconLink ? (
                <Image
                  src={iconLink}
                  alt={tech}
                  width={100}
                  height={100}
                  className="m-4"
                />
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
          {/* <Image
            src="https://thenounproject.com/api/private/icons/821469/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
            width={20}
            height={20}
          ></Image> */}
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
