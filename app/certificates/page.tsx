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

import { prisma } from '@/prisma/prisma-client';
import { CertificatesGroupList } from "@/components/shared/certificates-group-list";

export default async function Certificates() {
  const category = await prisma.category.findMany({
    include:{
      products:true,
    },
    where:{id:5}
  })
 
 
  return ( <>
  <div className="bg-sky-700">
  <Container className="flex items-center justify-center p-8">
 
  <Title text="Сертификаты" size="lg" className="font-bold text-gray-100"/>


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
          <BreadcrumbPage>Сертификаты</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    </Container>
    
    <Container className="flex items-center justify-start p-8">

    {
    category.map((category) =>(
      category.products.length > 0  && category.id === 5 && (
        <CertificatesGroupList
        key={category.id}
        title={category.name}
        items={category.products}
        />
      )))
    }

    
    
    </Container>
   </>
  );
}
