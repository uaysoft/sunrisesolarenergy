
import { ReactNode } from 'react';

interface AboutHeroProps {
  title: string;
  children?: ReactNode;
}

const AboutHero = ({ title, children }: AboutHeroProps) => {
  return (
    <section className="bg-sunrise-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">{title}</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          {children && (
            <div className="text-lg md:text-xl">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
