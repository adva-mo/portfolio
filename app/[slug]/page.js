import AppCard from "../UI/AppCard";
import { getApps } from "../util/utils";

export default async function page({ params }) {
  const apps = await getApps(params.slug);

  return (
    <div>
      {params.slug} projects
      {apps?.map((app) => (
        <AppCard
          name={app.name}
          codingLanguages={app.codingLanguages}
          info={app.info}
          githubLink={app.githubLink}
          demo={app.demo}
          tech={app.tech}
        />
      ))}
    </div>
  );
}
