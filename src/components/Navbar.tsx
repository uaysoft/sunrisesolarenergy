
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslationContext } from '../contexts/TranslationContext';

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
            >
              {t('nav.products')}
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </nav>

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
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/products"
              className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.products')}
            </Link>
            <Link
              to="/projects"
              className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
