import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

import { prisma } from '@/prisma/prisma-client';

export default async function Szi() {
  const category = await prisma.category.findMany({
    include:{
      products:true,
    },
  })
 
 
  return ( <>
  <div className="bg-sky-700">
  <Container className="flex items-center justify-center p-8">
 
  <Title text="Средства защиты информации" size="lg" className="font-bold text-gray-100"/>


  </Container>
  </div>
  
  <Container className="flex items-center justify-start p-8">

  <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Оборудование</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Технические средства защиты информации</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    </Container>
    
    <Container className="flex items-center justify-start p-8">

    {
    category.map((category) =>(
      category.products.length > 0  && category.id === 2 && (
        <ProductsGroupList
        key={category.id}
        title={category.name}
        items={category.products}
        categoryTitle={category.categoryTitle}
        />
      )))
    }

    
    
    </Container>
   </>
  );
}
