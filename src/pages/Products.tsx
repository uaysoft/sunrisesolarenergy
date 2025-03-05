
import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import { useTranslationContext } from '../contexts/TranslationContext';

const Products = () => {
  const { t } = useTranslationContext();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Product categories and their items
  const productCategories = [
    {
      id: "solar-panels",
      name: t('products.categories.panels'),
      items: [
        {
          name: "Monocrystalline Solar Panel",
          description: "High efficiency solar panels with sleek design, ideal for residential installations.",
          specs: ["Power: 400W-550W", "Efficiency: 20-22%", "Warranty: 25 years"],
          image: "/public/lovable-uploads/45a51904-f566-4950-a897-d544d1c2bb77.png"
        },
        {
          name: "Polycrystalline Solar Panel",
          description: "Cost-effective solar solution with reliable performance for various applications.",
          specs: ["Power: 320W-450W", "Efficiency: 17-19%", "Warranty: 20 years"],
          image: "/public/lovable-uploads/28b6225c-bc61-4b72-b8ae-1a8c9ea5a621.png"
        },
        {
          name: "Bifacial Solar Panel",
          description: "Dual-sided panels that capture reflected light on the rear side for increased energy production.",
          specs: ["Power: 440W-600W", "Efficiency: 22-23%", "Warranty: 30 years"],
          image: "/public/lovable-uploads/55f2baa0-9c76-4bce-95b2-03b603184216.png"
        }
      ]
    },
    {
      id: "batteries",
      name: t('products.categories.batteries'),
      items: [
        {
          name: "Lithium-Ion Battery",
          description: "Advanced lithium-ion technology for efficient energy storage and longer cycle life.",
          specs: ["Capacity: 5kWh-15kWh", "Cycle Life: 6000+ cycles", "Warranty: 10 years"],
          image: "/public/lovable-uploads/e499f893-996a-4aa6-bc4d-f9d53fc9cdd0.png"
        },
        {
          name: "LiFePO4 Battery",
          description: "Safe and stable lithium iron phosphate batteries for residential and commercial use.",
          specs: ["Capacity: 5kWh-20kWh", "Cycle Life: 8000+ cycles", "Warranty: 12 years"],
          image: "/public/lovable-uploads/e499f893-996a-4aa6-bc4d-f9d53fc9cdd0.png"
        }
      ]
    },
    {
      id: "inverters",
      name: t('products.categories.inverters'),
      items: [
        {
          name: "Grid-Tied Inverter",
          description: "Connect your solar system directly to the utility grid for maximum efficiency.",
          specs: ["Power: 3kW-50kW", "Efficiency: 98%", "Warranty: 10 years"],
          image: "/public/lovable-uploads/1efc85b9-f5c1-43ed-ad56-ef882e9db8b3.png"
        },
        {
          name: "Hybrid Inverter",
          description: "Versatile solution that works with or without batteries and the grid.",
          specs: ["Power: 5kW-15kW", "Efficiency: 97%", "Warranty: 10 years"],
          image: "/public/lovable-uploads/1efc85b9-f5c1-43ed-ad56-ef882e9db8b3.png"
        },
        {
          name: "Off-Grid Inverter",
          description: "Perfect for remote locations without grid access, delivering reliable power.",
          specs: ["Power: 1kW-12kW", "Efficiency: 95%", "Warranty: 5 years"],
          image: "/public/lovable-uploads/1efc85b9-f5c1-43ed-ad56-ef882e9db8b3.png"
        }
      ]
    },
    {
      id: "pumps",
      name: t('products.categories.pumps'),
      items: [
        {
          name: "Solar Water Pump System",
          description: "Efficient water pumping solution powered directly by solar energy.",
          specs: ["Power: 0.5HP-5HP", "Flow Rate: Up to 40m³/hour", "Warranty: 3 years"],
          image: "/public/lovable-uploads/8a9727e8-d1d9-41c8-9161-802823c97438.png"
        },
        {
          name: "Solar Submersible Pump",
          description: "Designed for deep wells and boreholes with high efficiency solar drive.",
          specs: ["Depth: Up to 180m", "Flow Rate: Up to 20m³/hour", "Warranty: 2 years"],
          image: "/public/lovable-uploads/8a9727e8-d1d9-41c8-9161-802823c97438.png"
        }
      ]
    },
    {
      id: "accessories",
      name: t('products.categories.accessories'),
      items: [
        {
          name: "Solar Panel Mounting System",
          description: "Secure and adjustable mounting solutions for various roof types and ground installations.",
          specs: ["Material: Aluminum/Steel", "Wind Resistance: Up to 180km/h", "Warranty: 15 years"],
          image: "/public/lovable-uploads/56b574c8-cd02-478e-a659-45c0fa34ffa4.png"
        },
        {
          name: "Control Cabinet",
          description: "Pre-wired electrical cabinets for safe and organized system integration.",
          specs: ["IP Rating: IP65", "Material: Powder-coated steel", "Warranty: 5 years"],
          image: "/public/lovable-uploads/13d5faf1-d2a1-4189-b066-f3356e115eb0.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('products.pageTitle')}</h1>
            <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              {t('products.pageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="solar-panels" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              {productCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-sunrise-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {productCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((product, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow duration-300">
                      <div className="h-56 overflow-hidden">
                        <LazyImage
                          src={product.image}
                          alt={product.name}
                          imgClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {product.specs.map((spec, i) => (
                              <li key={i}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                        <Button className="bg-sunrise-600 hover:bg-sunrise-700 text-white mt-2 w-full">
                          Request Quote <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('products.ctaTitle')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('products.ctaText')}
          </p>
          <Button size="lg" className="bg-sunrise-600 hover:bg-sunrise-700 text-white px-8">
            {t('products.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
