
import { TabsContent } from "@/components/ui/tabs";
import ProjectCard from '@/components/ProjectCard';

interface ProjectDetail {
  name: string;
  description: string;
  details: string[];
  image: string;
}

interface ProjectCategoryProps {
  id: string;
  name: string;
  items: ProjectDetail[];
  viewDetailsText: string;
}

const ProjectCategory = ({ id, name, items, viewDetailsText }: ProjectCategoryProps) => {
  return (
    <TabsContent key={id} value={id} className="mt-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            categoryName={name}
            viewDetailsText={viewDetailsText}
            className="hover-scale"
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProjectCategory;
