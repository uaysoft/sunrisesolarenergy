import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LazyImage from '@/components/LazyImage';
import { useTranslationContext } from '../contexts/TranslationContext';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';

const Projects = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Project categories and their items
  const projectCategories = [
    {
      id: "commercial",
      name: t('projects.categories.commercial'),
      items: [
        {
          name: "Retail Store, Kano State",
          description: "Complete solar power solution for a large retail store, providing reliable electricity and reducing operational costs.",
          details: ["System Size: 16 kWp PV + 8kW/15kWh", "Average Daily PV Power yield: 90 kWh", "Annual CO2 Reduction: 20 tonnes"],
          image: "/public/lovable-uploads/416d8d3c-2f66-49e1-8987-964a470dcafc.png"
        },
        {
          name: "Sunbelt Group, Kano State",
          description: "Large-scale grid-tied solar installation for manufacturing facility, significantly reducing electricity costs.",
          details: ["System Size: 221 KW Grid-tied PV Project", "Annual PV Power Yield: 360,000 kWh", "Annual CO2 Reduction: 180 tonnes"],
          image: "/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
        },
        {
          name: "Hotel, Tashkent, Uzbekistan",
          description: "Hybrid solar system with battery backup for a luxury hotel, ensuring uninterrupted power supply.",
          details: ["System Size: 20 kW Grid-tied PV + 5 kW/10 kWh Energy Storage", "Average Daily PV Power Yield: 125 kWh", "Annual CO2 Reduction: 32 tonnes"],
          image: "/public/lovable-uploads/fb1dca98-9987-4e08-9acb-1529df63e905.png"
        }
      ]
    },
    {
      id: "residential",
      name: t('projects.categories.residential'),
      items: [
        {
          name: "Private Residence, Lagos",
          description: "Off-grid solar system for a luxury residence, providing 24/7 power independence from the grid.",
          details: ["System Size: 10 kWp PV + 10kW/20kWh Battery", "Average Daily PV Power yield: 45 kWh", "Annual CO2 Reduction: 12 tonnes"],
          image: "/public/lovable-uploads/44af58cd-4c68-4ee5-9ca2-f9b349d62966.png"
        },
        {
          name: "Residential Complex, Abuja",
          description: "Shared solar installation for a residential complex of 10 homes, with individual monitoring and billing.",
          details: ["System Size: 50 kWp PV + 40kW/80kWh Battery", "Average Daily PV Power yield: 225 kWh", "Annual CO2 Reduction: 60 tonnes"],
          image: "/public/lovable-uploads/e5d16b56-6fb7-449e-9694-d3961f308e54.png"
        }
      ]
    },
    {
      id: "agricultural",
      name: t('projects.categories.agricultural'),
      items: [
        {
          name: "Farm Irrigation System, Northern Nigeria",
          description: "Solar water pumping solution for large-scale farm irrigation, eliminating diesel generator costs.",
          details: ["System Size: 15 kWp PV + 10HP Pumping System", "Water Delivery: 120,000 liters/day", "Annual CO2 Reduction: 25 tonnes"],
          image: "/public/lovable-uploads/8a9727e8-d1d9-41c8-9161-802823c97438.png"
        },
        {
          name: "Agricultural Processing Facility, Kano",
          description: "Complete power solution for agricultural processing, incorporating solar PV and battery storage.",
          details: ["System Size: 35 kWp PV + 20kW/40kWh Battery", "Average Daily PV Power yield: 160 kWh", "Annual CO2 Reduction: 40 tonnes"],
          image: "/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title={t('projects.pageTitle')} 
        description={t('projects.pageDescription')} 
      />

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="commercial" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              {projectCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-sunrise-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {projectCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((project, index) => (
                    <ProjectCard 
                      key={index} 
                      project={project} 
                      categoryName={category.name}
                      viewDetailsText={t('projects.viewDetails')}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('projects.featuredTitle')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <LazyImage
                src="/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
                alt="Sunbelt Group Project"
                className="rounded-lg overflow-hidden shadow-medium"
                imgClassName="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Sunbelt Group, Kano State</h3>
              <p className="text-lg text-gray-600 mb-6">
                This landmark 221 KW Grid-tied PV Project represents one of the largest commercial solar installations in Northern Nigeria, powering a major manufacturing facility while significantly reducing operational costs and carbon emissions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <span className="text-2xl font-bold text-sunrise-600">221 kW</span>
                  <p className="text-gray-600">System Size</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <span className="text-2xl font-bold text-sunrise-600">360,000 kWh</span>
                  <p className="text-gray-600">Annual Energy Production</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <span className="text-2xl font-bold text-sunrise-600">180 tonnes</span>
                  <p className="text-gray-600">Annual CO2 Reduction</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-soft">
                  <span className="text-2xl font-bold text-sunrise-600">5 years</span>
                  <p className="text-gray-600">Investment Payback Period</p>
                </div>
              </div>
              <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white">
                Download Case Study <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title={t('projects.ctaTitle')}
        text={t('projects.ctaText')}
        buttonText={t('projects.ctaButton')}
        className="bg-sunrise-600 text-white"
        buttonVariant="white"
      />
    </div>
  );
};

export default Projects;
