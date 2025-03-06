
import { useEffect } from 'react';
import { useTranslationContext } from '../contexts/TranslationContext';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import TurnkeyService from '@/components/TurnkeyService';
import AboutHero from '@/components/AboutHero';
import MapSection from '@/components/MapSection';

const Contact = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AboutHero title="CONTACT US">
        <p className="text-lg md:text-xl animate-slide-in-bottom">
          Get in touch with our team for inquiries, quotes, and support
        </p>
      </AboutHero>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reach Out To Us</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you might have about our solar solutions
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
            
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <MapSection 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124963.97876563713!2d8.451756871936476!3d11.995558287323305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8286b3a7a153%3A0x3f66886204c8fe8d!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1684327137398!5m2!1sen!2sus"
            title="Sunrise Solar Location"
          />
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Turnkey Solutions</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to installation and beyond, we provide comprehensive solar solutions
            </p>
          </div>
          <TurnkeyService />
        </div>
      </section>
    </div>
  );
};

export default Contact;
