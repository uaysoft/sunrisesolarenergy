
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  text: string;
  buttonText: string;
  className?: string;
  buttonVariant?: "default" | "sunrise" | "white";
}

const CTASection = ({ 
  title, 
  text, 
  buttonText,
  className = "",
  buttonVariant = "default"
}: CTASectionProps) => {
  const getButtonClasses = () => {
    switch(buttonVariant) {
      case "sunrise":
        return "bg-sunrise-600 hover:bg-sunrise-700 text-white";
      case "white":
        return "bg-white text-sunrise-600 hover:bg-gray-100";
      default:
        return "bg-sunrise-600 hover:bg-sunrise-700 text-white";
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {text}
        </p>
        <Button size="lg" className={`${getButtonClasses()} px-8`}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
