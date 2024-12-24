import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
}

export const ProductImage: React.FC<Props> = ({ imageUrl, className, name }) => {
  return (
    <div className={cn('flex items-start justify-center', className)}>
      <img
        src={imageUrl}
        alt={name}
        className={cn('relative left-2 top-2  rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5')}
       
      />

       </div>
  );
};
