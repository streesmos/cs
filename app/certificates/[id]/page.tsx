
import { prisma } from '@/prisma/prisma-client';
import { notFound } from "next/navigation";
import { Container } from '@/components/shared/container';
import { ProductName } from '@/components/shared/product-name';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import { ProductContent } from '@/components/shared/product-content';

export function generateStaticParams() {
  return [
    { id: '35' }, { id: '36' }, { id: '37' },
  ]
}

export default async function ProductPage({params:{id}} : {params:{id:string}}){
  const product = await prisma.product.findFirst({where:{id: Number(id)} })
 
    if (!product) {
        return notFound();
    }

    return (
      <>
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
          <BreadcrumbLink href="/certificates">Сертификаты</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{product.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </Container>
  <Container className="flex flex-col my-10 items-start md:flex-row">              
      <ProductName name={product.name}  />
   </Container>
   <Container className="flex flex-col  my-1 items-start">
    <ProductContent content={product.content}  />
   </Container>
        </>
      );
      
} 