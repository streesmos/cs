import React from 'react';
import Link from "next/link"
import { Container } from './container';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

interface Props {
  className?: string;
}



export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('border-b border-zinc-900 bg-zinc-900 text-gray-100 mt-12 min-h-52', className)}>
      <Container className="flex items-center justify-between p-8">
      <div>
      
      <div className="flex flex-col items-top space-x-0 space-y-2 text-sm md:flex-row md:space-x-4">
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-medium leading-none">Меню</h3>
        <Link href="/news" className='text-gray-200'>Новости</Link>
        <Link href="/services" className='text-gray-200'>Услуги</Link>
        <Link href="/products" className='text-gray-200'>Оборудование</Link>
        <Link href="/certificates" className='text-gray-200'>Сертификаты</Link>
        <Link href="/licenses" className='text-gray-200'>Лицензии</Link>
        <Link href="/aboutus" className='text-gray-200'>О нас</Link>
        <Link href="/contacts" className='text-gray-200'>Контакты</Link>
      </div>
        <Separator orientation="vertical" />
      <div className="flex flex-col space-y-1 ">
        <h3 className="text-lg font-medium leading-none">Услуги</h3>
        <Link href="/services/32" className='text-gray-200'>Специальные работы</Link>
        <Link href="/services/33" className='text-gray-200'>Сертифицированные испытания</Link>
        <Link href="/services/34" className='text-gray-200'>Аттестация объектов информатизации</Link>
      </div>
        <Separator orientation="vertical" />
      <div className="flex flex-col space-y-1 ">
        <h3 className="text-lg font-medium leading-none">Оборудование</h3>
        <Link href="/products/szi" className='text-gray-200'>Средства защиты информации</Link>
        <Link href="/products/tszi" className='text-gray-200'>Технические cредства защиты информации</Link>
        <Link href="/products/kozi" className='text-gray-200'>Комплекты оценки защищенности информации</Link>
      </div>
      </div>
      <Separator className="my-8" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">ЦСТБИ &copy; 2009-{new Date().getFullYear()}</h4>
       
      </div>
    </div>
      </Container>
    </footer>
  );
};


