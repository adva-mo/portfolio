import { getApps } from "../util/utils";

export default async function page() {
  const apps = await getApps("backend");
  console.log(apps);

  return <div>backend projects</div>;
}
