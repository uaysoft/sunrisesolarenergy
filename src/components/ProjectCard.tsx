
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

interface ProjectDetail {
  name: string;
  description: string;
  details: string[];
  image: string;
}

interface ProjectCardProps {
  project: ProjectDetail;
  categoryName: string;
  viewDetailsText: string;
}

const ProjectCard = ({ project, categoryName, viewDetailsText }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
      <div className="h-56 overflow-hidden">
        <LazyImage
          src={project.image}
          alt={project.name}
          imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-sunrise-100 text-sunrise-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {categoryName}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Key Details:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
        <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white mt-2">
          {viewDetailsText} <ChevronRight size={16} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
