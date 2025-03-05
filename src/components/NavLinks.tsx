
import { Link } from 'react-router-dom';
import { useTranslationContext } from '../contexts/TranslationContext';

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

const NavLinks = ({ className, onClick }: NavLinksProps) => {
  const { t } = useTranslationContext();
  
  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-sunrise-600 dark:hover:text-sunrise-400 transition-colors"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
