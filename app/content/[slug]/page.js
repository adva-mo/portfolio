import AppCard from "../../UI/AppCard";
import { getApps } from "../../util/utils";

export default async function page({ params }) {
  const apps = await getApps(params.slug);

  return (
    <div className="mt-10 w-full text-grey">
      <h3 className="mb-16 text-2xl uppercase text-black">
        {params.slug} projects
      </h3>
      <div className="flex-wrap flex justify-evenly gap-14">
        {apps?.map((app) => (
          <AppCard
            name={app.name}
            codingLanguages={app.codingLanguages}
            info={app.info}
            githubLink={app.githubLink}
            demo={app.demo}
            tech={app.tech}
            img={app.img}
            key={app.name}
          />
        ))}
      </div>
    </div>
  );
}
