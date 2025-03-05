
import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslationContext } from '../contexts/TranslationContext';

const Contact = () => {
  const { t } = useTranslationContext();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sunrise-600 hover:bg-sunrise-700 text-white px-6 py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="text-sunrise-600 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nigeria Office:</h4>
                      <p className="text-gray-700">
                        Sunrise New Energy Technology Co.Ltd<br />
                        No. 9, Magajin Rumfa Left Of Residence Sixteen,<br />
                        Nassarawa/Gra, Kano State, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="text-sunrise-600 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">China Office:</h4>
                      <p className="text-gray-700">
                        Shandong Longguang Tianxu Solar Energy Co., Ltd.<br />
                        489 Beihuan Road, Zhucheng, Weifang City,<br />
                        Shandong Province, China
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="text-sunrise-600 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Numbers:</h4>
                      <p className="text-gray-700">
                        Tel: +86 15964341134<br />
                        WeChat/WhatsApp: +86 18310008190
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-sunrise-600 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email:</h4>
                      <p className="text-gray-700">erin.xing@foxmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Our Service Commitment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="block text-sunrise-600 font-semibold">Efficient</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="block text-green-600 font-semibold">Green</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="block text-blue-600 font-semibold">Energy Saving</span>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">TURNKEY SERVICE</h2>
              <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="mb-8">
                <img 
                  src="/public/lovable-uploads/fa703336-104b-4e05-a641-4ee75408c77b.png" 
                  alt="Turnkey Service Process" 
                  className="mx-auto max-w-full h-auto"
                />
              </div>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  SUNRISE is your ultimate partner in providing full turnkey solar power solutions. From initial site surveys and feasibility reports to design, production of solar supplies, installation, commissioning, and maintenance of Solar Power Plants, we offer an end-to-end service. Our commitment to delivering world-class solar technology, coupled with the expertise of our experienced delivery partners, ensures affordable, clean, and reliable solar energy solutions.
                </p>
                <p className="mb-4">
                  With extensive experience in both on-grid and off-grid solar installations, quality assurance is ingrained in every aspect of our business. Our highly skilled Engineering, Procurement, and Construction (EPC) team ensures seamless execution of each solar project, from concept to commissioning. We provide comprehensive training to ensure a smooth handover at the completion of the contract.
                </p>
                <p>
                  Monitoring and reporting are crucial aspects of our services. We offer real-time and historical data, performance-based alerts, and web-based monitoring systems, providing our clients with valuable insights and control over their solar power plants.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>One stop solution</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>Reduced Fuel Consumption</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>Reduced Total Cost of Ownership</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>Automatic Power Management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>Access to clean energy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                      <span>Professional maintenance and support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
