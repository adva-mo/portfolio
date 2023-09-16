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
        <fieldset className="border border-neutral-500 h-full flex flex-col px-2">
          <legend className="px-1">
            <Image src={"/jupiter.png"} width={50} height={50}></Image>
            {/* <div>i</div> */}
          </legend>
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
