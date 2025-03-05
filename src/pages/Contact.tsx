
import { useEffect } from 'react';
import { useTranslationContext } from '../contexts/TranslationContext';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import TurnkeyService from '@/components/TurnkeyService';

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CONTACT US</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl">
              Get in touch with our team for inquiries, quotes, and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Reach Out To Us</h2>
              <div className="w-20 h-1 bg-sunrise-500 mb-8"></div>
              
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
          <div className="bg-white rounded-lg overflow-hidden shadow-soft">
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124963.97876563713!2d8.451756871936476!3d11.995558287323305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8286b3a7a153%3A0x3f66886204c8fe8d!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1684327137398!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunrise Solar Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <TurnkeyService />
        </div>
      </section>
    </div>
  );
};

export default Contact;
