"use client";
import Image from "next/image";
import { useState } from "react";

export default function AppCard({ name, info, githubLink, demo, tech, img }) {
  const [showSkills, setshowSkills] = useState(false);

  const mountedStyle = { animation: "inAnimation 400ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 400ms ease-out",
    animationFillMode: "forwards",
  };

  return (
    <div className="w-[35rem] m-0 h-[45rem] flex flex-col rounded  gap-2">
      <div className="relative h-[30rem] w-[35rem] rounded">
        {showSkills ? (
          <div
            className="flex justify-center items-center align-center gap-3 h-[100%] flex-wrap transition-opacity duration-500 ease-in-out"
            style={showSkills ? mountedStyle : unmountedStyle}
          >
            {tech.map((tech) => {
              return (
                <Image
                  src={`/icons/${tech}.svg`}
                  alt={tech}
                  width={100}
                  height={100}
                  className="m-4"
                  key={tech}
                  priority={true}
                />
              );
            })}
          </div>
        ) : (
          <Image
            src={img}
            alt="Not available"
            fill={true}
            className="rounded transition-opacity duration-1000ms ease-in-out"
            style={showSkills ? unmountedStyle : mountedStyle}
            layout="fixed"
          ></Image>
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
        <div
          className="bg-orange w-[250px] py-3 rounded drop-shadow-md"
          style={demo ? {} : { cursor: "not-allowed" }}
        >
          <a
            className=" w-[250px] py-3 rounded drop-shadow-md"
            href={demo}
            style={demo ? {} : { pointerEvents: "none" }}
          >
            {demo ? "View app" : "Demo is not available"}
          </a>
        </div>
      </div>
    </div>
  );
}
