import fs from "fs/promises";
import path from "path";

type Project = {
  id: string;
  name: string;
  description: string;
};

async function loadProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  const projects = await loadProjects();
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}
