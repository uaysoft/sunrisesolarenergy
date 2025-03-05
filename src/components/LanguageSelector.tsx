
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslationContext } from '../contexts/TranslationContext';

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({ className }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslationContext();
  
  // Close dropdown when clicked outside
  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    document.addEventListener('click', closeDropdown);
    
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'zh', e: React.MouseEvent) => {
    e.stopPropagation();
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={toggleDropdown}
      >
        <div className="w-6 h-6 rounded-full overflow-hidden">
          {currentLanguage === 'en' ? (
            <img src="/public/lovable-uploads/55f2baa0-9c76-4bce-95b2-03b603184216.png" alt="Nigerian flag" className="w-full h-full object-cover" />
          ) : (
            <img src="/public/lovable-uploads/49760443-169d-42d2-8f36-fc1d2a83a043.png" alt="Chinese flag" className="w-full h-full object-cover" />
          )}
        </div>
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage === 'en' ? 'English' : '中文'}</span>
        <ChevronDown size={16} />
      </div>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-md z-50 transform origin-top-right transition-transform">
          <div 
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLanguage === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={(e) => handleLanguageChange('en', e)}
          >
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img src="/public/lovable-uploads/55f2baa0-9c76-4bce-95b2-03b603184216.png" alt="Nigerian flag" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm">English</span>
          </div>
          <div 
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLanguage === 'zh' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={(e) => handleLanguageChange('zh', e)}
          >
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img src="/public/lovable-uploads/49760443-169d-42d2-8f36-fc1d2a83a043.png" alt="Chinese flag" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm">中文</span>
          </div>
        </div>
      )}
    </div>
  );
}
