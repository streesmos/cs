import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  imageUrl?: string;
  className?: string;
}

export const LicensesCard: React.FC<Props> = ({ id,name,  imageUrl, className }) => {

  

  return (
    
    <div className={cn(className)} >
      <Link href={`/licenses/${id}`}>
      <div className="flex justify-center p-6 bg-white rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="xs" className="mb-1 mt-3 font-medium" />
       </Link>
    

      
    </div>
  );
};
