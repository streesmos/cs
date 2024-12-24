import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  categoryTitle: string;
  items: any[];
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className,categoryTitle }) => {
  return (
    <div className={className}>
      <Title text={title} className="font-bold mb-5 text-xl" />
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ProductCard
          id= {item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            categoryTitle ={categoryTitle}
          />
        ))}
      </div>
    </div>
  );
};
