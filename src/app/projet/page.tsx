
import ProjectCard from "../../../components/ProjectCard";

export default function Projet() {
  return (
    <>
      <h1 className="text-4xl font-bold my-8 ml-8">Projet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectCard
          id="1"
          title="Projet 1"
          description="Application Mobile, YumYam"
        />
        <ProjectCard
          id="2"
          title="Projet 2"
          description="Description du projet 2"
        />
        <ProjectCard
          id="3"
          title="Projet 3"
          description="Description du projet 3"
        />
      </div>
    </>
  );
}