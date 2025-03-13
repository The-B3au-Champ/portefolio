import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ProjectCard({ id, title, description }: ProjectCardProps) {
  return (
    <div className='bg-gray-50 shadow-lg col-start-auto m-4 p-4 rounded-lg'>
      <Link href={`/projet/${id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
          <div>
            <p>{description}</p>
          </div>      
          {/* <img src={`/images/screenshot${id}.png`} alt={`Screenshot ${id}`} className="w-full h-auto rounded-lg" /> */}
      </Link>
    </div>
  );
}