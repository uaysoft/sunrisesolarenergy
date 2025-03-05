
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslationContext } from '../contexts/TranslationContext';
import NavLinks from './NavLinks';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslationContext();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks className="hidden md:flex items-center space-x-6" />

          {/* Right side items - Language selector and CTA button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector className="hidden sm:flex" />
            
            <Link to="/contact">
              <Button
                variant="default"
                className="bg-sunrise-600 text-white hover:bg-sunrise-700 rounded-md px-4 py-2 hidden md:inline-flex text-sm"
              >
                {t('hero.cta')}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
