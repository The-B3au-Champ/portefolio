import { use } from 'react';

async function fetchProject(projectId: string) {
  // Remplacez ceci par votre logique pour récupérer les détails du projet
  const projects = {
    '1': {
      id: '1',
      name: 'Projet 1',
      description: 'Description du projet 1',
      technologies: ['Next.js', 'React', 'Node.js'],
      challenges: 'Défis rencontrés lors du projet 1',
      screenshots: ['/images/screenshot1.png', '/images/screenshot2.png'],
    },
    '2': {
      id: '2',
      name: 'Projet 2',
      description: 'Description du projet 2',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      challenges: 'Défis rencontrés lors du projet 2',
      screenshots: ['/images/screenshot3.png', '/images/screenshot4.png'],
    },
    '3': {
      id: '3',
      name: 'Projet 3',
      description: 'Description du projet 3',
      technologies: ['Laravel', 'Php', 'MongoDB'],
      challenges: 'Défis rencontrés lors du projet 3',
      screenshots: ['/images/screenshot5.png', '/images/screenshot6.png'],
    },
  };

  return projects[projectId];
}

export async function generateStaticParams() {
  // Remplacez ceci par votre logique pour récupérer les IDs des projets
  const projects = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProductDetail({ params }: { params: { projectId: string } }) {
  const project = use(fetchProject(params.projectId));

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
      <h2 className="text-2xl font-semibold mb-2">Captures d'écran</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
}