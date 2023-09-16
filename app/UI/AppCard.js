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
    <div className="w-2/5 m-0 h-[500px] flex flex-col">
      <Image src={img} height={300} width={500}></Image>
      <div className="text-left grow">
        <p className="text-4xl text-black bold"> {name}</p>
        <p className="italic"> {info}</p>
      </div>
      <div className="flex gap-3 justify-center">
        <a href={githubLink}>githubLink</a>
        <a href={demo}>demo</a>
      </div>
    </div>
  );
}
