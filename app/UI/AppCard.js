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
    <div className="flex w-full mb-6">
      <div className="basis-3/4 flex flex-col">
        <h5 className="text-lg"> {name}</h5>
        <p className="italic"> {info}</p>
        <Image src={img} height={500} width={800}></Image>
      </div>
      <div class="basis-1/4">
        <fieldset className="border border-black h-full flex flex-col">
          <legend>i</legend>
          <p className="grow">coding Languages: {codingLanguages}</p>
          <hr />
          <p className="grow">technologies: {tech}</p>
          <hr />
          <div className="grow-none flex gap-3 justify-center">
            <a href={githubLink}>githubLink</a>
            <a href={demo}>demo</a>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
