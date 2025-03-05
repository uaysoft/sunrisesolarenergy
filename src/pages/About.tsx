
import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslationContext } from '../contexts/TranslationContext';
import LazyImage from '@/components/LazyImage';

const About = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-sunrise-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl">
              Leading the way in renewable energy solutions across Nigeria and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-sunrise-500 mb-8"></div>
              
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Sunrise New Energy Technology Co., Ltd. (hereafter "SUNRISE"), incorporated in Kano State, Nigeria, is dedicated to delivering all-encompassing one-stop solar solutions for both residential and commercial & industrial (C&I) sectors across Nigeria.
                </p>
                <p className="text-lg">
                  Its parent company, Shandong Longguang Tianxu Solar Energy Co., Ltd. (abbreviated as "Tanso"), is a global leader in advanced solar solutions. Tanso, with its advanced technologies and rich experience, paves the way for SUNRISE to play a significant role in the Nigerian solar energy market.
                </p>
                <p className="text-lg">
                  The company's core product portfolio encompasses solar photovoltaic systems and solar thermal products. Our offerings include grid-tied solar systems, hybrid solar systems, solar water heating systems, solar water pumping systems, solar irrigation systems, and more. These solutions integrate our proprietary products alongside those from other leading Chinese brands, guaranteeing comprehensive support for all kinds of power needs and contributing significantly to carbon footprint mitigation.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To accelerate the transition to sustainable energy through innovative solar solutions that are reliable, efficient, and accessible to all.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the leading provider of solar energy solutions in Africa, empowering communities and businesses with clean, renewable energy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <LazyImage
                  src="/public/lovable-uploads/344ad8b3-681d-4c76-b2be-94e70b06c92b.png"
                  alt="Sunrise Factory"
                  className="rounded-lg overflow-hidden h-64"
                  imgClassName="w-full h-full object-cover"
                />
                <LazyImage
                  src="/public/lovable-uploads/9a886edb-4e86-4f4a-b7c7-a35b0e0691ed.png"
                  alt="Solar Panel Installation"
                  className="rounded-lg overflow-hidden h-64"
                  imgClassName="w-full h-full object-cover"
                />
                <LazyImage
                  src="/public/lovable-uploads/e5d16b56-6fb7-449e-9694-d3961f308e54.png"
                  alt="Commercial Installation"
                  className="rounded-lg overflow-hidden h-64"
                  imgClassName="w-full h-full object-cover"
                />
                <LazyImage
                  src="/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png"
                  alt="Manufacturing Facility"
                  className="rounded-lg overflow-hidden h-64"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications and Honors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Qualifications and Honors</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">National Green Factory</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">National-level "Little Giant" Enterprise</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">National High-tech Enterprise</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Single Product Champion in Manufacturing Industry of Shandong Province</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Quality-leading Brand in the National Solar Photothermal Industry</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Provincial Enterprise with "Abiding by Contracts and Valuing Credit"</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Provincial Enterprise Technology Center of Shandong Province</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Well-known Brand in Shandong</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ChevronRight className="text-sunrise-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Innovative Small and Medium-sized Enterprise</h3>
              </div>
            </div>
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
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-semibold mb-4">Pre-sales</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Investment Consultation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Site Selection Assistance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Customized Design Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Site Construction Support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Operations and Maintenance Planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-semibold mb-4">After-sales</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Standardization of Workflow, Operations, and Policies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Technical Services, Marketing Support, and Training Programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Collaborative Platform for Technical Exchanges</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Creating Value through Win-Win Cooperation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-sunrise-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight className="text-sunrise-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700">24/7 Online Support and Service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-soft mb-8">
                <h3 className="text-xl font-semibold mb-6">Our Parent Company</h3>
                <LazyImage
                  src="/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png"
                  alt="Tanso Headquarters"
                  className="rounded-lg overflow-hidden mb-6"
                  imgClassName="w-full h-full object-cover"
                />
                <p className="text-gray-700 mb-4">
                  Shandong Longguang Tianxu Solar Energy Co., Ltd. (abbreviated as "Tanso") is a global leader in advanced solar solutions with extensive experience and technological expertise.
                </p>
                <ul className="space-y-2 text-gray-700">
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
                  className="rounded-lg overflow-hidden h-48"
                  imgClassName="w-full h-full object-cover"
                />
                <LazyImage
                  src="/public/lovable-uploads/44af58cd-4c68-4ee5-9ca2-f9b349d62966.png"
                  alt="Solar Panel Array"
                  className="rounded-lg overflow-hidden h-48"
                  imgClassName="w-full h-full object-cover"
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
          <a href="/contact" className="bg-white text-sunrise-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold inline-block transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
