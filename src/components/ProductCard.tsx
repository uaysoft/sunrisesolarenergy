
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import LazyImage from '@/components/LazyImage';

interface ProductSpec {
  name: string;
  description: string;
  specs: string[];
  image: string;
}

interface ProductCardProps {
  product: ProductSpec;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-shadow duration-300">
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
  );
};

export default ProductCard;
