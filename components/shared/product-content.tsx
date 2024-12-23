import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  content: string;
}

export const ProductContent: React.FC<Props> = ({  className, content }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 px-8', className)}>
      <h1 className={cn('text-lg font-medium')}>< div dangerouslySetInnerHTML = {{ __html : content }} className='list-disc'/></h1>

       </div>
  );
};
