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
  itemsz: any[];
}
import { ProductCard } from './product-card';



export const ProductSim: React.FC<Props> = ({  className,items,itemsz}) => {
  const difference = items.filter((obj1) => itemsz.find((obj2) =>  obj1.id === obj2.content));
   
  return (
    <div className={cn('flex items-center justify-center flex-1 px-8', className)}>
   <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >

<CarouselContent>
 {difference.map((item, i) => (
 
  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
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
