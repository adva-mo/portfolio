import Image from "next/image";

export default function AppCard({
  name,
  codingLanguages,
  info,
  githubLink,
  demo,
  tech,
  img,
}) {
  return (
    <div className="w-[550px] m-0 h-[600px] flex flex-col rounded border gap-2">
      <Image src={img} height={300} width={550}></Image>
      <p className="text-4xl text-black font-bold text-left"> {name}</p>
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
