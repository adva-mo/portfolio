"use client";
import Image from "next/image";
import { useState } from "react";

export default function AppCard({
  name,
  codingLanguages,
  info,
  githubLink,
  demo,
  tech,
  img,
}) {
  const [showSkills, setshowSkills] = useState(false);

  return (
    <div className="w-[550px] m-0 h-[600px] flex flex-col rounded  gap-2">
      <div>
        {showSkills ? (
          <p className=" h-[300px]">
            {codingLanguages}
            <br />
            {tech[0] || ""}
          </p>
        ) : (
          <Image src={img} height={300} width={550}></Image>
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
