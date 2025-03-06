
import { ReactNode } from 'react';
import LazyImage from '@/components/LazyImage';

interface CompanyInfoProps {
  title: string;
  content: ReactNode;
  imageGrid: string[];
  extraContent?: ReactNode;
}

const CompanyInfo = ({ title, content, imageGrid, extraContent }: CompanyInfoProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="w-20 h-1 bg-sunrise-500 mb-8"></div>
        
        <div className="prose max-w-none text-gray-700 space-y-4">
          {content}
        </div>
        
        {extraContent}
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {imageGrid.map((image, index) => (
            <LazyImage
              key={index}
              src={image}
              alt={`Company Image ${index + 1}`}
              className="rounded-lg overflow-hidden h-64 hover:shadow-medium transition-all duration-300"
              imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
