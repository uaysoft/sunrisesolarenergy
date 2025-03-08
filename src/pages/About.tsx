
import { useEffect } from 'react';
import { useTranslationContext } from '../contexts/TranslationContext';
import AboutHero from '@/components/AboutHero';
import CompanyInfo from '@/components/CompanyInfo';
import QualificationItem from '@/components/QualificationItem';
import ServicesList from '@/components/ServicesList';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const qualifications = [
    "National Green Factory",
    "National-level \"Little Giant\" Enterprise",
    "National High-tech Enterprise",
    "Single Product Champion in Manufacturing Industry of Shandong Province",
    "Quality-leading Brand in the National Solar Photothermal Industry",
    "Provincial Enterprise with \"Abiding by Contracts and Valuing Credit\"",
    "Provincial Enterprise Technology Center of Shandong Province",
    "Well-known Brand in Shandong",
    "Innovative Small and Medium-sized Enterprise"
  ];

  const preSalesServices = [
    "Investment Consultation",
    "Site Selection Assistance",
    "Customized Design Solutions",
    "Site Construction Support",
    "Operations and Maintenance Planning"
  ];

  const afterSalesServices = [
    "Standardization of Workflow, Operations, and Policies",
    "Technical Services, Marketing Support, and Training Programs",
    "Collaborative Platform for Technical Exchanges",
    "Creating Value through Win-Win Cooperation",
    "24/7 Online Support and Service"
  ];

  const companyImageGrid = [
    "/public/lovable-uploads/344ad8b3-681d-4c76-b2be-94e70b06c92b.png",
    "/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png",
    "/public/lovable-uploads/e5d16b56-6fb7-449e-9694-d3961f308e54.png",
    "/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png"
  ];

  const missionVisionContent = (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-medium transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Mission</h3>
        <p className="text-gray-700">
          To accelerate the transition to sustainable energy through innovative solar solutions that are reliable, efficient, and accessible to all.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-medium transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Vision</h3>
        <p className="text-gray-700">
          To be the leading provider of solar energy solutions in Africa, empowering communities and businesses with clean, renewable energy.
        </p>
      </div>
    </div>
  );

  const companyDescription = (
    <>
      <p className="text-lg mb-4">
        Sunrise New Energy Technology Co., Ltd. (hereafter "SUNRISE"), incorporated in Kano State, Nigeria, is dedicated to delivering all-encompassing one-stop solar solutions for both residential and commercial & industrial (C&I) sectors across Nigeria.
      </p>
      <p className="text-lg mb-4">
        Its parent company, Shandong Longguang Tianxu Solar Energy Co., Ltd. (abbreviated as "Tanso"), is a global leader in advanced solar solutions. Tanso, with its advanced technologies and rich experience, paves the way for SUNRISE to play a significant role in the Nigerian solar energy market.
      </p>
      <p className="text-lg">
        The company's core product portfolio encompasses solar photovoltaic systems and solar thermal products. Our offerings include grid-tied solar systems, hybrid solar systems, solar water heating systems, solar water pumping systems, solar irrigation systems, and more.
      </p>
    </>
  );

  return (
    <div className="min-h-screen pt-20">
      <AboutHero title="ABOUT US">
        <p className="text-lg md:text-xl animate-slide-in-bottom">
          Leading the way in renewable energy solutions across Nigeria and beyond
        </p>
      </AboutHero>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CompanyInfo 
            title="Our Story"
            content={companyDescription}
            imageGrid={companyImageGrid}
            extraContent={missionVisionContent}
          />
        </div>
      </section>

      {/* Qualifications and Honors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Qualifications and Honors</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our parent company has received numerous accolades and certifications for excellence in solar technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {qualifications.map((qualification, index) => (
              <QualificationItem key={index} title={qualification} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="w-20 h-1 bg-sunrise-500 mb-8"></div>
              
              <div className="space-y-8">
                <ServicesList 
                  title="Pre-sales Services"
                  items={preSalesServices}
                />
                
                <ServicesList 
                  title="After-sales Services"
                  items={afterSalesServices}
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-soft mb-8 hover:shadow-medium transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Our Parent Company</h3>
                <LazyImage
                  src="/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png"
                  alt="Tanso Headquarters"
                  className="rounded-lg overflow-hidden mb-6"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <p className="text-gray-700 mb-4">
                  Shandong Longguang Tianxu Solar Energy Co., Ltd. (abbreviated as "Tanso") is a global leader in advanced solar solutions with extensive experience and technological expertise.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                    <span>Industry-leading manufacturing facility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                    <span>Advanced R&D capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                    <span>International quality certifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                    <span>Global distribution network</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <LazyImage
                  src="/public/lovable-uploads/02a6b9a6-999b-4179-8372-22f672b65386.png"
                  alt="Solar Installation"
                  className="rounded-lg overflow-hidden h-48 hover:shadow-medium transition-all duration-300"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/44af58cd-4c68-4ee5-9ca2-f9b349d62966.png"
                  alt="Solar Panel Array"
                  className="rounded-lg overflow-hidden h-48 hover:shadow-medium transition-all duration-300"
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
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in our mission to revolutionize the energy landscape in Nigeria with sustainable, efficient, and reliable solar solutions.
          </p>
          <Button className="bg-white text-sunrise-600 hover:bg-gray-100 px-8 py-6 rounded-md font-semibold inline-block transition-colors">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
