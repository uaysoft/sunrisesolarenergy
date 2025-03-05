
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslationContext } from '../contexts/TranslationContext';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const { t } = useTranslationContext();
  
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out pt-20 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      <div className="container mx-auto px-4 py-4">
        <NavLinks 
          className="flex flex-col space-y-6" 
          onClick={() => setIsOpen(false)} 
        />
        
        <div className="pt-6 flex items-center">
          <LanguageSelector />
        </div>
        
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <Button
            variant="default"
            className="bg-sunrise-600 text-white hover:bg-sunrise-700 rounded-md px-6 py-3 w-full mt-4 text-lg"
          >
            {t('hero.cta')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
