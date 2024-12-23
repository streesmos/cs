import React from 'react';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

import Link from "next/link"
import { PhoneCall } from 'lucide-react';
import { Container } from './container';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { SearchInput } from './search-input';
import { cn } from '@/lib/utils';
//import { CartDrawer } from './cart-drawer';

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

const uslugi: { title: string; href: string; description: string }[] = [
  {
    title: "Специальные работы",
    href: "/services/sr",
    description:
      "Проведение лабораторных специальных исследований основных и вспомогательных технических средств в соответствии с требованиями руководящих документов  ФСТЭК и ФСБ России",
  },
  {
    title: "Сертифицированные испытания",
    href: "/services/si",
    description:
      "Аккредитовано в качестве Испытательной лаборатории в  системах сертификации ФСБ России, ФСТЭК России, Минобороны РФ ",
  },
  {
    title: "Аттестация объектов информатизации",
    href: "/services/aoi",
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

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b border-sky-700 bg-sky-700 text-gray-100 hidden md:flex', className)}>
      <Container className="flex items-center justify-between p-8">
        <div className="flex items-center gap-1">
        <a href="/">   <Image src="/logo.png" width={109} height={52} alt="Logo" /> </a>
        </div>
        
        <NavigationMenu className='mx-6'>
      <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger><Link href="" legacyBehavior passHref>ЦСТБИ</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
              {cstbi.map((cstbi) => (
                <ListItem
                  key={cstbi.title}
                  title={cstbi.title}
                  href={cstbi.href}
                >
                 
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="/services" legacyBehavior passHref>Услуги</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "> 
             {uslugi.map((uslugi) => (
               
               <ListItem
                  key={uslugi.title}
                  title={uslugi.title}
                  href={uslugi.href}
                > 
                  {uslugi.description}
                </ListItem> 
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger><Link href="/products" legacyBehavior passHref>  Оборудование</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {products.map((products) => (
                <ListItem
                  key={products.title}
                  title={products.title}
                  href={products.href}
                >
                  {products.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/certificates" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Сертификаты
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/licenses" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Лицензии
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
    
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
       
    <Button asChild variant="outline" className='text-orange-400 py-5'>
    
      <Link href="tel:+74956493295"><PhoneCall size={16}  strokeWidth={1.5} absoluteStrokeWidth className='mx-1 text-orange-400' /><p className=' hidden lg:flex'>+7(495) 649-32-95</p></Link>
    </Button>
      </Container>
    </header>
  );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"