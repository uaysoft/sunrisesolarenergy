
import { useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslationContext } from '../contexts/TranslationContext';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ProjectCategory from '@/components/ProjectCategory';
import FeaturedProject from '@/components/FeaturedProject';

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
      name: "Commercial",
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
      name: "Residential",
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
      name: "Agricultural",
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

  const featuredProjectStats = [
    { value: "221 kW", label: "System Size" },
    { value: "360,000 kWh", label: "Annual Energy Production" },
    { value: "180 tonnes", label: "Annual CO2 Reduction" },
    { value: "5 years", label: "Investment Payback Period" }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Our Projects" 
        description="Discover our successful solar installations across Nigeria and beyond"
        bgColor="bg-gradient-to-b from-sunrise-50 to-white"
      />

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="commercial" className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore our diverse portfolio of solar installations</p>
            </div>
            
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              {projectCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-sunrise-500 data-[state=active]:text-white transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {projectCategories.map(category => (
              <ProjectCategory 
                key={category.id}
                id={category.id}
                name={category.name}
                items={category.items}
                viewDetailsText="View Details"
              />
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Project</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          </div>
          
          <FeaturedProject 
            title="Sunbelt Group, Kano State"
            image="/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
            description="This landmark 221 KW Grid-tied PV Project represents one of the largest commercial solar installations in Northern Nigeria, powering a major manufacturing facility while significantly reducing operational costs and carbon emissions."
            stats={featuredProjectStats}
          />
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Solar Project?" 
        text="Our team of experts is ready to help you design and implement a solar solution tailored to your specific needs."
        buttonText="Contact Us Today"
        className="bg-sunrise-600 text-white"
        buttonVariant="white"
      />
    </div>
  );
};

export default Projects;
