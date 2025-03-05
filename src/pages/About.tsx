
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Trophy, Star, GraduationCap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import { useTranslationContext } from '../contexts/TranslationContext';

const About = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Jane Smith",
      position: "CEO & Founder",
      bio: "With over 15 years in renewable energy, Jane has led Sunrise Solar to become a leader in the industry.",
      image: "/public/lovable-uploads/ec0e07bf-4edb-4279-b1d9-32ef4413dcba.png"
    },
    {
      name: "John Adeyemi",
      position: "Technical Director",
      bio: "John oversees all technical aspects of our projects, ensuring the highest quality standards.",
      image: "/public/lovable-uploads/49760443-169d-42d2-8f36-fc1d2a83a043.png"
    },
    {
      name: "Li Wei",
      position: "International Relations",
      bio: "Li manages our international partnerships and ensures smooth operations across borders.",
      image: "/public/lovable-uploads/6e409e9d-0068-4759-b5cf-9123ac2faf4a.png"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('about.pageTitle')}</h1>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.pageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.storyTitle')}</h2>
              <div className="w-20 h-1 bg-sunrise-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Sunrise Solar has grown from a small team of passionate renewable energy enthusiasts to a leading solar solutions provider in Nigeria and beyond. Our journey began with a simple mission: to bring clean, reliable solar power to homes and businesses across Africa.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Over the years, we've completed hundreds of installations, from small residential systems to large commercial projects. Our partnership with Chinese manufacturers ensures we deliver the highest quality products at competitive prices. We're proud of the positive impact we've made in reducing carbon emissions and providing energy independence to our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="text-sunrise-500 mr-2 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Quality First</h3>
                    <p className="text-gray-600">Only the finest components and workmanship</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-sunrise-500 mr-2 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Customer Satisfaction</h3>
                    <p className="text-gray-600">Exceeding expectations on every project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-sunrise-500 mr-2 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-gray-600">Embracing the latest solar technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-sunrise-500 mr-2 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Sustainability</h3>
                    <p className="text-gray-600">Committed to a greener future</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <LazyImage
                  src="/public/lovable-uploads/344ad8b3-681d-4c76-b2be-94e70b06c92b.png"
                  alt="Sunrise Office"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/02a6b9a6-999b-4179-8372-22f672b65386.png"
                  alt="Solar Installation"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/44af58cd-4c68-4ee5-9ca2-f9b349d62966.png"
                  alt="Residential Project"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <LazyImage
                  src="/public/lovable-uploads/e5d16b56-6fb7-449e-9694-d3961f308e54.png"
                  alt="Commercial Project"
                  className="rounded-lg overflow-hidden h-64 shadow-medium"
                  imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.statsTitle')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-16 h-16 bg-sunrise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-sunrise-600" size={24} />
              </div>
              <span className="text-4xl font-bold text-gray-900 block mb-2">500+</span>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-16 h-16 bg-sunrise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-sunrise-600" size={24} />
              </div>
              <span className="text-4xl font-bold text-gray-900 block mb-2">200+</span>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-16 h-16 bg-sunrise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-sunrise-600" size={24} />
              </div>
              <span className="text-4xl font-bold text-gray-900 block mb-2">25+</span>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-16 h-16 bg-sunrise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-sunrise-600" size={24} />
              </div>
              <span className="text-4xl font-bold text-gray-900 block mb-2">50+</span>
              <p className="text-gray-600">Certified Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.teamTitle')}</h2>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about solar energy and committed to excellence in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="h-72 overflow-hidden">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sunrise-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-medium">
              <div className="w-16 h-16 bg-sunrise-100 rounded-full flex items-center justify-center mb-6">
                <Star className="text-sunrise-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('about.missionTitle')}</h3>
              <p className="text-lg text-gray-600">
                Our mission is to accelerate the transition to sustainable energy by providing innovative, reliable, and affordable solar solutions that empower communities and businesses across Africa. We are committed to reducing carbon footprints while improving energy access and security.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-medium">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('about.visionTitle')}</h3>
              <p className="text-lg text-gray-600">
                We envision a future where clean, renewable solar energy is the primary power source for homes, businesses, and communities throughout Africa. Our vision is to be the leading provider of solar solutions, known for excellence, innovation, and positive environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sunrise-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.ctaTitle')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('about.ctaText')}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-sunrise-600 hover:bg-gray-100">
              {t('about.ctaButton')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
