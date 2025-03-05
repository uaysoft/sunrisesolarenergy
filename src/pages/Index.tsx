
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Sun, Battery, Droplet, Cpu, Zap, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import { useTranslationContext } from '../contexts/TranslationContext';

const Index = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <LazyImage
            src="/public/lovable-uploads/28b6225c-bc61-4b72-b8ae-1a8c9ea5a621.png"
            alt="Solar Panels"
            imgClassName="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {t('hero.subtitle')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-sunrise-600 hover:bg-sunrise-700 text-white rounded-md px-8 py-6 text-lg animate-pulse-soft">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#services" className="text-white flex flex-col items-center">
              <span className="text-sm mb-2">{t('hero.scroll')}</span>
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-soft p-6 transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
              <div className="w-14 h-14 bg-sunrise-100 rounded-full flex items-center justify-center mb-4">
                <Sun className="text-sunrise-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('services.residential')}</h3>
              <p className="text-gray-600 mb-4">
                Complete solar solutions for homes, designed for reliability and energy independence.
              </p>
              <Link to="/products" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6 transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
              <div className="w-14 h-14 bg-sunrise-100 rounded-full flex items-center justify-center mb-4">
                <Battery className="text-sunrise-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('services.commercial')}</h3>
              <p className="text-gray-600 mb-4">
                Powerful systems for businesses, reducing operational costs and carbon footprint.
              </p>
              <Link to="/products" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6 transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
              <div className="w-14 h-14 bg-sunrise-100 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-sunrise-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('services.pump')}</h3>
              <p className="text-gray-600 mb-4">
                Solar water pumping solutions for agriculture, homes, and industrial applications.
              </p>
              <Link to="/products" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('products.title')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Sun size={24} />, title: t('products.panel'), image: "/public/lovable-uploads/45a51904-f566-4950-a897-d544d1c2bb77.png" },
              { icon: <Battery size={24} />, title: t('products.battery'), image: "/public/lovable-uploads/e499f893-996a-4aa6-bc4d-f9d53fc9cdd0.png" },
              { icon: <Zap size={24} />, title: t('products.inverter'), image: "/public/lovable-uploads/1efc85b9-f5c1-43ed-ad56-ef882e9db8b3.png" },
              { icon: <Droplet size={24} />, title: t('products.pump'), image: "/public/lovable-uploads/8a9727e8-d1d9-41c8-9161-802823c97438.png" },
              { icon: <Cpu size={24} />, title: t('products.cabinet'), image: "/public/lovable-uploads/13d5faf1-d2a1-4189-b066-f3356e115eb0.png" },
              { icon: <Workflow size={24} />, title: t('products.rack'), image: "/public/lovable-uploads/56b574c8-cd02-478e-a659-45c0fa34ffa4.png" },
            ].map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-soft group hover-scale transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.title}
                    imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sunrise-600">{product.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                  </div>
                  <Link to="/products" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center mt-3">
                    View Details <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white">
                {t('products.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <LazyImage
                  src="/public/lovable-uploads/416d8d3c-2f66-49e1-8987-964a470dcafc.png"
                  alt="Retail Store Solar Installation"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t('projects.commercial')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Retail Store, Kano State</h3>
                <p className="text-gray-600 mb-2">16 kWp PV + 8kW/15kWh</p>
                <p className="text-gray-600 mb-4">Average Daily PV Power yield: 90 kWh</p>
                <Link to="/projects" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                  {t('projects.viewCase')} <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Featured Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <LazyImage
                  src="/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
                  alt="Sunbelt Group Solar Project"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t('projects.commercial')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sunbelt Group, Kano State</h3>
                <p className="text-gray-600 mb-2">221 KW Grid-tied PV Project</p>
                <p className="text-gray-600 mb-4">Annual PV Power Yield: 360,000 kWh</p>
                <Link to="/projects" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                  {t('projects.viewCase')} <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Featured Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <LazyImage
                  src="/public/lovable-uploads/fb1dca98-9987-4e08-9acb-1529df63e905.png"
                  alt="Hotel Solar Project"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t('projects.commercial')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hotel, Tashkent, Uzbekistan</h3>
                <p className="text-gray-600 mb-2">20 kW Grid-tied PV + 5 kW/10 kWh Energy Storage</p>
                <p className="text-gray-600 mb-4">Average Daily PV Power Yield: 125 kWh</p>
                <Link to="/projects" className="text-sunrise-600 hover:text-sunrise-700 inline-flex items-center">
                  {t('projects.viewCase')} <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white">
                {t('projects.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
              <div className="w-20 h-1 bg-sunrise-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.mission')}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-3">
                    <Sun className="text-sunrise-600" size={20} />
                  </div>
                  <span className="font-medium">Efficient</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Sun className="text-green-600" size={20} />
                  </div>
                  <span className="font-medium">Green</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Battery className="text-blue-600" size={20} />
                  </div>
                  <span className="font-medium">Energy Saving</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <LazyImage
                  src="/public/lovable-uploads/344ad8b3-681d-4c76-b2be-94e70b06c92b.png"
                  alt="Sunrise Factory"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/02a6b9a6-999b-4179-8372-22f672b65386.png"
                  alt="Solar Panel Installation"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/44af58cd-4c68-4ee5-9ca2-f9b349d62966.png"
                  alt="Residential Installation"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/e5d16b56-6fb7-449e-9694-d3961f308e54.png"
                  alt="Commercial Installation"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sunrise-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Clean Solar Energy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts will help you design the perfect solar solution for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-sunrise-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
