import { cn } from '@/lib/utils';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
  className?: string;
  items: any[];
}
import { ProductCard } from './product-card';



export const ProductPopular: React.FC<Props> = ({  className,items}) => {
  
 
  return (
    <div className={cn('flex items-center justify-center flex-1 px-8', className)}>
   <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >

<CarouselContent>
 {items.map((item, i) => (
 
  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
          <ProductCard
          
          id= {item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            categoryTitle ={item.title}
          /> 
               </div>
             </CarouselItem>
        ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>  
     
       </div>
  );
};
