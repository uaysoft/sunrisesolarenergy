
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
}

const PageHero = ({ 
  title, 
  description, 
  bgColor = "bg-gray-100", 
  textColor = "text-gray-900",
  children
}: PageHeroProps) => {
  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-3xl md:text-5xl font-bold ${textColor} mb-4 animate-fade-in`}>{title}</h1>
          <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-in-bottom">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
