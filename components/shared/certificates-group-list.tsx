import React from 'react';
import { Title } from './title';
import { CertificatesCard } from './certificates-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const CertificatesGroupList: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={className}>
      <Title text={title} className="font-bold mb-5 text-xl" />
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <CertificatesCard
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
