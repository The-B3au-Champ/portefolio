import fs from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  challenges: string;
  screenshots: string[];
};

// Charger les projets depuis le fichier JSON
async function loadProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

// Génération des paramètres statiques pour la page dynamique
export async function generateStaticParams() {
  const projects = await loadProjects();
  return projects.map((project) => ({
    params: { projectId: project.id },
  }));
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const projects = await loadProjects();
  const project = projects.find((p) => p.id === params.projectId);

  return {
    title: project ? project.name : "Projet introuvable",
    description: project ? project.description : "Détails du projet non disponibles.",
  };
}

// Fonction de la page dynamique, sans `PageProps`
export default async function ProjectDetail({ params }: { params: { projectId: string } }) {
  const projects = await loadProjects();
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) return <p className="text-center text-red-500">Projet introuvable</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Technologies utilisées</h2>
      <ul className="list-disc list-inside mb-4">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Défis rencontrés</h2>
      <p className="mb-4">{project.challenges}</p>

      <h2 className="text-2xl font-semibold mb-2">Captures d&apos;écran</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.screenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot}
            width={500}
            height={300}
            alt={`Capture d'écran ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
