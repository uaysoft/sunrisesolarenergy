
interface MapSectionProps {
  src: string;
  title: string;
}

const MapSection = ({ src, title }: MapSectionProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 h-[400px]">
        <iframe 
          src={src}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MapSection;
