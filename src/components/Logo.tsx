
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
        <img
          src="/public/lovable-uploads/752393e2-230f-454f-a6c8-6ec570f99e7e.png"
          alt="Sunrise Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="ml-2 text-lg md:text-xl font-bold text-gray-900 dark:text-white">SUNRISE</span>
    </Link>
  );
};

export default Logo;
