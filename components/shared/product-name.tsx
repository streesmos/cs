import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  name: string;
}

export const ProductName: React.FC<Props> = ({  className, name }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 px-8', className)}>
      <h1 className={cn('text-2xl font-medium')}>{name}</h1>

       </div>
  );
};
