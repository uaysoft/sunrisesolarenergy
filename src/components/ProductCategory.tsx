
import { TabsContent } from "@/components/ui/tabs";
import ProductCard from '@/components/ProductCard';

interface ProductSpec {
  name: string;
  description: string;
  specs: string[];
  image: string;
}

interface ProductCategoryProps {
  id: string;
  items: ProductSpec[];
}

const ProductCategory = ({ id, items }: ProductCategoryProps) => {
  return (
    <TabsContent key={id} value={id} className="mt-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product} 
            className="hover-scale"
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProductCategory;
