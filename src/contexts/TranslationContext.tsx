
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the types of translations
type Language = 'en' | 'zh';

type Translations = {
  [key: string]: {
    en: string;
    zh: string;
  };
};

// Create a context with a default state
type TranslationContextType = {
  t: (key: string) => string;
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  translations: Translations;
};

const defaultContext: TranslationContextType = {
  t: (key: string) => key,
  currentLanguage: 'en',
  changeLanguage: () => {},
  translations: {},
};

const TranslationContext = createContext<TranslationContextType>(defaultContext);

// Create a provider component
interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>({
    // Navigation
    'nav.home': { en: 'Home', zh: '首页' },
    'nav.products': { en: 'Products', zh: '产品' },
    'nav.projects': { en: 'Projects', zh: '项目' },
    'nav.about': { en: 'About Us', zh: '关于我们' },
    'nav.contact': { en: 'Contact Us', zh: '联系我们' },
    
    // Hero Section
    'hero.title': { 
      en: 'ONE-STOP SOLAR SOLUTION', 
      zh: '一站式太阳能解决方案' 
    },
    'hero.subtitle': { 
      en: 'Reliable, Sustainable, Efficient Solar Energy Systems', 
      zh: '可靠，持续，高效的太阳能系统' 
    },
    'hero.cta': { 
      en: 'Get a Quote', 
      zh: '获取报价' 
    },
    'hero.scroll': { 
      en: 'Scroll Down', 
      zh: '向下滚动' 
    },
    
    // About Section
    'about.title': { 
      en: 'ABOUT US', 
      zh: '关于我们' 
    },
    'about.subtitle': { 
      en: 'Experience Quality Solar Solutions', 
      zh: '体验高质量的太阳能解决方案' 
    },
    'about.description': { 
      en: 'Sunrise New Energy Technology Co., Ltd., incorporated in Kano State, Nigeria, is dedicated to delivering all-encompassing one-stop solar solutions for both residential and commercial & industrial (C&I) sectors across Nigeria. Its parent company, Shandong Longguang Tianxu Solar Energy Co., Ltd. (abbreviated as "Tanso"), is a global leader in advanced solar solutions.', 
      zh: 'Sunrise新能源科技有限公司在尼日利亚卡诺州注册成立，致力于为尼日利亚全国的住宅和商业及工业（C&I）部门提供全方位的一站式太阳能解决方案。其母公司山东龙光天旭太阳能有限公司（简称"Tanso"）是全球先进太阳能解决方案的领导者。'
    },
    'about.mission': { 
      en: 'Our mission is to provide reliable and sustainable energy solutions that empower communities and businesses, reduce carbon footprints, and create a cleaner future for Nigeria.', 
      zh: '我们的使命是提供可靠和可持续的能源解决方案，为社区和企业赋能，减少碳足迹，为尼日利亚创造更清洁的未来。'
    },
    
    // Services Section
    'services.title': { 
      en: 'OUR SERVICES', 
      zh: '我们的服务' 
    },
    'services.residential': { 
      en: 'RESIDENTIAL INSTALLATION', 
      zh: '住宅安装' 
    },
    'services.commercial': { 
      en: 'COMMERCIAL INSTALLATION', 
      zh: '商业安装' 
    },
    'services.cleaning': { 
      en: 'PANEL CLEANING', 
      zh: '面板清洁' 
    },
    'services.backup': { 
      en: 'BACK-UP POWER', 
      zh: '备用电源' 
    },
    'services.sales': { 
      en: 'PRODUCT SALES', 
      zh: '产品销售' 
    },
    
    // Products Section
    'products.title': { 
      en: 'OUR PRODUCTS', 
      zh: '我们的产品' 
    },
    'products.subtitle': { 
      en: 'Complete Solar Energy Solutions', 
      zh: '完整的太阳能解决方案' 
    },
    'products.pageTitle': { 
      en: 'Our Products', 
      zh: '我们的产品' 
    },
    'products.pageDescription': { 
      en: 'Explore our comprehensive range of high-quality solar energy products', 
      zh: '探索我们全面的高质量太阳能产品' 
    },
    'products.categories.panels': { 
      en: 'Solar Panels', 
      zh: '太阳能电池板' 
    },
    'products.categories.batteries': { 
      en: 'Energy Storage Batteries', 
      zh: '储能电池' 
    },
    'products.categories.inverters': { 
      en: 'Inverters', 
      zh: '逆变器' 
    },
    'products.categories.pumps': { 
      en: 'Solar Water Pumps', 
      zh: '太阳能水泵' 
    },
    'products.categories.accessories': { 
      en: 'Accessories', 
      zh: '配件' 
    },
    'products.ctaTitle': { 
      en: 'Ready to Transform Your Energy Supply?', 
      zh: '准备好转变您的能源供应了吗？' 
    },
    'products.ctaText': { 
      en: 'Contact our team today to discuss how our solar products can meet your energy needs and help you save costs.', 
      zh: '立即联系我们的团队，讨论我们的太阳能产品如何满足您的能源需求并帮助您节省成本。' 
    },
    'products.ctaButton': { 
      en: 'Get a Quote', 
      zh: '获取报价' 
    },
    
    // Projects Section
    'projects.title': { 
      en: 'OUR PROJECTS', 
      zh: '我们的项目' 
    },
    'projects.subtitle': { 
      en: 'Successful Installations Across Africa', 
      zh: '遍及非洲的成功安装' 
    },
    'projects.pageTitle': { 
      en: 'Our Projects', 
      zh: '我们的项目' 
    },
    'projects.pageDescription': { 
      en: 'Discover our successful solar installations across Nigeria and beyond', 
      zh: '了解我们在尼日利亚和其他地区的成功太阳能安装项目' 
    },
    'projects.categories.residential': { 
      en: 'Residential', 
      zh: '住宅' 
    },
    'projects.categories.commercial': { 
      en: 'Commercial', 
      zh: '商业' 
    },
    'projects.categories.agricultural': { 
      en: 'Agricultural', 
      zh: '农业' 
    },
    'projects.viewDetails': { 
      en: 'View Details', 
      zh: '查看详情' 
    },
    'projects.featuredTitle': { 
      en: 'Featured Project', 
      zh: '精选项目' 
    },
    'projects.ctaTitle': { 
      en: 'Ready to Start Your Solar Project?', 
      zh: '准备开始您的太阳能项目了吗？' 
    },
    'projects.ctaText': { 
      en: 'Our team of experts is ready to help you design and implement a solar solution tailored to your specific needs.', 
      zh: '我们的专家团队随时准备帮助您设计和实施针对您特定需求的太阳能解决方案。' 
    },
    'projects.ctaButton': { 
      en: 'Contact Us Today', 
      zh: '立即联系我们' 
    },
    
    // Contact Section
    'contact.title': { 
      en: 'CONTACT US', 
      zh: '联系我们' 
    },
    'contact.subtitle': { 
      en: 'Get in Touch with Our Team', 
      zh: '与我们的团队联系' 
    },
    'contact.nigeria': { 
      en: 'Nigeria Office', 
      zh: '尼日利亚办事处' 
    },
    'contact.china': { 
      en: 'China Office', 
      zh: '中国办事处' 
    },
    'contact.address.nigeria': { 
      en: 'No. 9, Magajin Rumfa Left Of Residence Sixteen, NassarrawaGra, Kano State, Nigeria', 
      zh: '尼日利亚卡诺州纳萨拉瓦格拉，住宅十六左侧，马加因·鲁姆法9号' 
    },
    'contact.address.china': { 
      en: '489 Beihuan Road, Zhucheng, Weifang City, Shandong Province, China', 
      zh: '中国山东省潍坊市诸城市北环路489号' 
    },
    'contact.phone': { 
      en: 'Phone', 
      zh: '电话' 
    },
    'contact.email': { 
      en: 'Email', 
      zh: '电子邮件' 
    },
    'contact.form.name': { 
      en: 'Full Name', 
      zh: '全名' 
    },
    'contact.form.email': { 
      en: 'Email Address', 
      zh: '电子邮件地址' 
    },
    'contact.form.phone': { 
      en: 'Phone Number', 
      zh: '电话号码' 
    },
    'contact.form.message': { 
      en: 'Your Message', 
      zh: '您的留言' 
    },
    'contact.form.submit': { 
      en: 'Send Message', 
      zh: '发送留言' 
    },
    
    // Footer
    'footer.rights': { 
      en: 'All Rights Reserved', 
      zh: '版权所有' 
    },
    'footer.products': { 
      en: 'Products', 
      zh: '产品' 
    },
    'footer.solutions': { 
      en: 'Solutions', 
      zh: '解决方案' 
    },
    'footer.residentialSolutions': { 
      en: 'Residential Solutions', 
      zh: '住宅解决方案' 
    },
    'footer.commercialSolutions': { 
      en: 'Commercial Solutions', 
      zh: '商业解决方案' 
    },
    'footer.offGridSolutions': { 
      en: 'Off-Grid Solutions', 
      zh: '离网解决方案' 
    },
    'footer.company': { 
      en: 'Company', 
      zh: '公司' 
    },
    'footer.about': { 
      en: 'About Us', 
      zh: '关于我们' 
    },
    'footer.projects': { 
      en: 'Projects', 
      zh: '项目' 
    },
    'footer.contact': { 
      en: 'Contact', 
      zh: '联系' 
    },
    'footer.privacy': { 
      en: 'Privacy Policy', 
      zh: '隐私政策' 
    },
    'footer.terms': { 
      en: 'Terms of Service', 
      zh: '服务条款' 
    },
  });

  // Function to translate
  const t = (key: string): string => {
    if (translations[key] && translations[key][currentLanguage]) {
      return translations[key][currentLanguage];
    }
    return key;
  };

  // Function to change language
  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Save language preference to localStorage
    localStorage.setItem('language', lang);
    // Update document language for accessibility
    document.documentElement.lang = lang;
  };

  // Load saved language preference on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const value = {
    t,
    currentLanguage,
    changeLanguage,
    translations,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the translation context
export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};
