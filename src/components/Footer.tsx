
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslationContext } from '../contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslationContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/public/lovable-uploads/ec0e07bf-4edb-4279-b1d9-32ef4413dcba.png" 
                alt="Sunrise Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="ml-2 text-xl font-bold">SUNRISE</span>
            </div>
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Sunrise New Energy Technology Co., Ltd., providing comprehensive one-stop solar solutions for residential, commercial & industrial sectors.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.products')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.residentialSolutions')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.commercialSolutions')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.offGridSolutions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.projects')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 text-sunrise-400 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  {t('contact.address.nigeria')}
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 text-sunrise-400 flex-shrink-0" size={20} />
                <a href="tel:+2348103788888" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  +234 810 378 8888
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 text-sunrise-400 flex-shrink-0" size={20} />
                <a href="mailto:erin.xing@foxmail.com" className="text-gray-400 hover:text-sunrise-400 transition-colors">
                  erin.xing@foxmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Sunrise New Energy Technology Co., Ltd. {t('footer.rights')}
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png" 
                alt="Certifications" 
                className="h-10 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
