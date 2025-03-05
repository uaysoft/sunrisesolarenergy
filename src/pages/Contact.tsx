
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { useTranslationContext } from '../contexts/TranslationContext';

const Contact = () => {
  const { t } = useTranslationContext();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'residential'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.formSuccess'),
        description: t('contact.formSuccessMessage'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'residential'
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.pageTitle')}</h1>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.pageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.infoTitle')}</h2>
              
              <div className="bg-white rounded-lg shadow-medium p-6 mb-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-sunrise-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('contact.addressTitle')}</h3>
                    <p className="text-gray-600">
                      Sunrise Solar Headquarters<br />
                      123 Energy Street, Victoria Island<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-sunrise-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('contact.phoneTitle')}</h3>
                    <p className="text-gray-600">
                      Nigeria: +234 801 234 5678<br />
                      China: +86 10 1234 5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-sunrise-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('contact.emailTitle')}</h3>
                    <p className="text-gray-600">
                      info@sunrisesolar.com<br />
                      sales@sunrisesolar.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-sunrise-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('contact.hoursTitle')}</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{t('contact.officesTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-soft p-4">
                  <h4 className="font-semibold mb-2">Kano Office</h4>
                  <p className="text-gray-600 text-sm">
                    456 Solar Road<br />
                    Kano, Nigeria<br />
                    +234 802 345 6789
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-soft p-4">
                  <h4 className="font-semibold mb-2">Abuja Office</h4>
                  <p className="text-gray-600 text-sm">
                    789 Power Avenue<br />
                    Abuja, Nigeria<br />
                    +234 803 456 7890
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-soft p-4">
                  <h4 className="font-semibold mb-2">Guangzhou Office</h4>
                  <p className="text-gray-600 text-sm">
                    321 Solar Manufacturing Zone<br />
                    Guangzhou, China<br />
                    +86 20 8765 4321
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-soft p-4">
                  <h4 className="font-semibold mb-2">Shanghai Office</h4>
                  <p className="text-gray-600 text-sm">
                    987 Energy Plaza<br />
                    Shanghai, China<br />
                    +86 21 8765 4321
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.formTitle')}</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      {t('contact.nameLabel')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      {t('contact.emailLabel')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      {t('contact.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-gray-700 mb-2">
                      {t('contact.interestLabel')} *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                    >
                      <option value="residential">{t('contact.interestOptions.residential')}</option>
                      <option value="commercial">{t('contact.interestOptions.commercial')}</option>
                      <option value="agricultural">{t('contact.interestOptions.agricultural')}</option>
                      <option value="industrial">{t('contact.interestOptions.industrial')}</option>
                      <option value="other">{t('contact.interestOptions.other')}</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    {t('contact.subjectLabel')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t('contact.messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sunrise-500"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sunrise-600 hover:bg-sunrise-700 text-white py-3 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      {t('contact.send')}
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-medium">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7304254448675!2d3.4232380744461257!3d6.430675724732835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x36ae3e233b36a810!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1698764272408!5m2!1sen!2sng" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.faqTitle')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t('contact.faqDescription')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: t('contact.faq.q1'),
                answer: t('contact.faq.a1')
              },
              {
                question: t('contact.faq.q2'),
                answer: t('contact.faq.a2')
              },
              {
                question: t('contact.faq.q3'),
                answer: t('contact.faq.a3')
              },
              {
                question: t('contact.faq.q4'),
                answer: t('contact.faq.a4')
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
