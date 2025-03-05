
interface PageHeroProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

const PageHero = ({ 
  title, 
  description, 
  bgColor = "bg-gray-100", 
  textColor = "text-gray-900" 
}: PageHeroProps) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl font-bold ${textColor} mb-4`}>{title}</h1>
          <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
