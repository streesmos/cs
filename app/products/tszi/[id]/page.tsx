
import { prisma } from '@/prisma/prisma-client';
import { notFound } from "next/navigation";
import { Container } from '@/components/shared/container';
import { ProductImage } from '@/components/shared/product-image';
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
import { ProductTable } from '@/components/shared/product-table';
import { Title } from '@/components/shared/title';
import { ProductContent } from '@/components/shared/product-content';
import { ProductSim } from '@/components/shared/product-sim';

export function generateStaticParams() {
  return [
    { id: '18' }, { id: '19' }, { id: '20' },{ id: '21' },
    { id: '22' }, { id: '23' }, { id: '24' },{ id: '25' },
    { id: '26' }, { id: '27' }, { id: '28' },{ id: '29' },
    { id: '30' }, 
  ]
}
export default async function ProductPage({params:{id}} : {params:{id:string}}){
    const product = await prisma.product.findFirst({where:{id: Number(id)} })
    const tableItems = await prisma.table.findMany({where:{productId: Number(id)} })
    const sim = await prisma.simProducts.findMany((
      {where:{productId: Number(id)},
       }))
    const simItems = await prisma.product.findMany((
        {
         }))
   
 
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
          <BreadcrumbLink href="/products">Оборудование</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/tszi">Технические средства защиты информации</BreadcrumbLink>
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
    <ProductImage imageUrl={product.imageUrl} name={product.name} className='w-full md:w-1/3'/>
    <div  className='w-full md:w-2/3'>          
      <ProductName name={product.name}  />
      <p className='flex items-center justify-end flex-1 px-8 py-2'>Артикул: 00{product.id}</p>
      <ProductTable   items={tableItems}/>
    </div>
   </Container>
   <Container className="flex flex-col  my-1 items-start">
    <Title text='Описание' size='sm' className="font-bold mb-5 px-8" />
    <ProductContent content={product.content}  />
   </Container>
  <Container className="flex flex-col  my-12 items-start">
    <Title text='Похожие товары' size='sm' className="font-bold mb-5 px-8" />
    <ProductSim items={simItems} itemsz= {sim}/> 
  </Container>
        </>
      );
      
}