'use client';

import React from 'react';
import Image from 'next/image';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

import Link from "next/link"
import { PhoneCall } from 'lucide-react';
import { Container } from './container';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { SearchInput } from './search-input';
import { cn } from '@/lib/utils';
//import { CartDrawer } from './cart-drawer';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';

interface Props {
  className?: string;
}

const cstbi: { title: string; href: string; }[] = [
  {
    title: "Новости",
    href: "/news",
  },
  {
    title: "О нас",
    href: "/aboutus",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
 
]

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Специальные работы",
    href: "/services/32",
    description:
      "Проведение лабораторных специальных исследований основных и вспомогательных технических средств в соответствии с требованиями руководящих документов  ФСТЭК и ФСБ России",
  },
  {
    title: "Сертифицированные испытания",
    href: "/services/33",
    description:
      "Аккредитовано в качестве Испытательной лаборатории в  системах сертификации ФСБ России, ФСТЭК России, Минобороны РФ ",
  },
  {
    title: "Аттестация объектов информатизации",
    href: "/services/34",
    description:
      "Комплекс организационно-технических мероприятий, в результате которых посредством специального документа — «Аттестата соответствия»",
  },

]


const products: { title: string; href: string; description: string }[] = [
  {
    title: "Средства защиты информации",
    href: "/products/szi",
    description:
      "Предотвращения несанкционированного доступа, изменения, уничтожения или раскрытия данных.",
  },
  {
    title: "Технические средства защиты информации",
    href: "/products/tszi",
    description:
      "Устройства и приборы, предназначенные для защиты каналов передачи и носителей информации.",
  },
  {
    title: "Комплекты оценки защищенности информации",
    href: "/products/kozi",
    description:
      "Комплексы, позволяющие провести анализ реализованных мер защиты информации.",
  },
 
]

export const MobileHeader: React.FC<Props> = ({ className }) => {
  
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <header>
        <div className='md:hidden flex flex-row justify-around py-6 border-b border-sky-700 bg-sky-700 text-gray-100'>
       
       <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="">
            <MenuIcon />
          </Button>
       </SheetTrigger>

      <div className="flex items-center gap-1">
        <a href="/">   <Image src="/logo.png" width={109} height={52} alt="Logo" /> </a>
        </div>

        <Button asChild variant="outline" className='text-orange-400 py-5'>
            <Link href="tel:+74956493295"><PhoneCall size={16}  strokeWidth={1.5} absoluteStrokeWidth className='mx-1 text-orange-400' /> </Link>
          </Button> 


        </div>

      <SheetContent side="left" className='bg-sky-700'> 
  
      <Container className="flex flex-col items-center justify-between p-8">
      <div className="flex">
              <SearchInput />
          </div>
      <Accordion type="single" collapsible className="w-full text-white mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger><Link href="/" onClick={() => { setOpen(false);}}>ЦСТБИ</Link></AccordionTrigger>
        <AccordionContent className='flex flex-col'>
        {cstbi.map((cstbi) => (
            <Link className='my-1' key={cstbi.title} href={cstbi.href} onClick={() => { setOpen(false);}}> {cstbi.title}</Link>
              ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger><Link href="/services" onClick={() => { setOpen(false);}}>Услуги</Link></AccordionTrigger>
        <AccordionContent className='flex flex-col'>
        {products.map((services) => (
            <Link className='my-1' key={services.title} href={services.href} onClick={() => { setOpen(false);}}> {services.title}</Link>
              ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger><Link href="/products"  onClick={() => { setOpen(false);}}>Продукты</Link></AccordionTrigger>
        <AccordionContent className='flex flex-col'>
        {cstbi.map((products) => (
            <Link className='my-1' key={products.title} href={products.href} onClick={() => { setOpen(false);}}> {products.title}</Link>
              ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='py-3'>
        <Link href="/certificates"  onClick={() => { setOpen(false);}}>Сертификаты</Link>
      </AccordionItem>
      <AccordionItem value="item-5" className='py-3'>
        <Link href="/licenses"  onClick={() => { setOpen(false);}}>Лицензии</Link>
      </AccordionItem>
    </Accordion>
    

      
    
    
      </Container>
    
    </SheetContent>
    </header>
    </Sheet>
  );
};


