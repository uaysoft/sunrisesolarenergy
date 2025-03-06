
import { ChevronRight } from 'lucide-react';

interface ServicesListProps {
  title: string;
  items: string[];
}

const ServicesList = ({ title, items }: ServicesListProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <ChevronRight className="text-sunrise-600 w-4 h-4" />
            </div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
