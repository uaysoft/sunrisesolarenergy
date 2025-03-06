
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

interface FeaturedProjectProps {
  title: string;
  image: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  buttonText?: string;
}

const FeaturedProject = ({ 
  title, 
  image, 
  description, 
  stats, 
  buttonText = "Download Case Study" 
}: FeaturedProjectProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2">
        <LazyImage
          src={image}
          alt={title}
          className="rounded-lg overflow-hidden shadow-medium transform transition-all duration-500 hover:scale-[1.02]"
          imgClassName="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 mb-6">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <span className="text-2xl font-bold text-sunrise-600">{stat.value}</span>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white group">
          {buttonText} <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProject;
