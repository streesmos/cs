'use client';

 import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';


import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
        console.log('log ser ' ,products)
      } catch (error) {
        console.log(error);
      }
    },
    100,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };


  const onLink = (linkv:number) => {
    switch (linkv){
      case 1: return "products/szi";
      case 2: return "products/tszi";
      case 3: return "products/kozi";
      case 4: return "services";
      case 5: return "certificates";
      case 6: return "licenses";
    }
  };

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

      <div
        ref={ref}
        className={cn('flex rounded-md flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-900" />
        <input
          className="rounded-md outline-none w-full bg-gray-100 text-gray-900 pl-11"
          type="text"
          placeholder="Найти оборудование..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-sky-800 rounded-md  top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-95 top-12',
            )}>
            {products.map((product) => (
              <Link 
                onClick={onClickItem}
                key={product.id}
                className="flex items-center gap-3 w-full px-3 py-4 hover:bg-orange-400 rounded-md"
                href={`/${onLink(product.categoryId)}/${product.id}`}>
                <img className="rounded-sm h-8 w-8" alt={product.name} src={product.imageUrl} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
