
import { ChevronRight } from 'lucide-react';

interface QualificationItemProps {
  title: string;
}

const QualificationItem = ({ title }: QualificationItemProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="flex items-start mb-4">
        <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
          <ChevronRight className="text-sunrise-600 w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default QualificationItem;
