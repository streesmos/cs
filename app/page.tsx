import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import Image from "next/image";
import { prisma } from '@/prisma/prisma-client';
import { ProductPopular } from "@/components/shared/product-popular";
import { Charts } from "@/components/shared/chart";
import { AboutList } from "@/components/shared/about-list";
import { ServicesList } from "@/components/shared/services-list";
import { ContactsMain } from "@/components/shared/contacts-main";


export default async function Home() {
  const product = await prisma.product.findMany(
    {
      where:{
        id: { in: [1, 2, 12, 14, 16 , 19] },
      }
      
    }
  )
  return ( <>
  <div className="bg-sky-700">
  <Container className="flex flex-col items-center justify-between p-8 lg:flex-row">
    <div>
  <Title text="АТТЕСТАЦИОННЫЙ ЦЕНТР" size="lg" className="font-extrabold text-gray-100"/>
  <Title text="Комплекс организационно-технических мероприятий, в результате которых посредством специального документа - Аттестата соответствия - подтверждается, что объект соответствует требованиям стандартов " 
  size="sm" className="font-light  text-gray-100"/>
  </div>
  <Image src="/main.png" width={667} height={508}  alt="Logo" />
  </Container>
  </div>
  
  <Container className="flex flex-col items-center justify-center py-8">
   
  <Title text="Популярное оборудование" className="text-base font-bold md:text-2xl"/>
  <ProductPopular items={product} className="max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-7xl"/>
  </Container>

    <Container className="flex flex-col items-center justify-between p-8 lg:flex-row">
   <AboutList/>
   <Charts/>
   </Container>

   <Container className="flex flex-col items-center justify-between p-8 lg:flex-row">
   <ServicesList/>
   </Container>

   <Container className="flex flex-col items-center justify-between p-8 lg:flex-row">
   <ContactsMain/>
   </Container>
  
   </>
  );
}
