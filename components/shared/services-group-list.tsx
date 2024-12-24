import React from 'react';
import { Title } from './title';
import { ServiceCard } from './service-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const ServicesGroupList: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={className}>
      <Title text={title} className="font-bold mb-5 text-xl" />
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ServiceCard
          id= {item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
