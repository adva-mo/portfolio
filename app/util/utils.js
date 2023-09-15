import path from "path";
import { promises } from "fs";

const relativePath = "app/data/data.json";
const absolutePath = path.resolve(relativePath);

export async function getApps(appType) {
  const appsData = await promises.readFile(absolutePath, "utf8");
  const apps = JSON.parse(appsData);
  return apps[appType];
}
