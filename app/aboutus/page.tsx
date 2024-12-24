import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Charts } from "@/components/shared/chart";
import { AboutusList } from "@/components/shared/aboutus-list";


export default async function AboutUs() {
  return ( <>
 
   <Container className="flex flex-col items-center justify-between p-8 lg:flex-col">
   <Title text="О НАС" className="text-base text-left font-bold md:text-2xl"/>
   <div className="flex flex-col items-start justify-between p-8 md:flex-row">
    <div className="md:sticky top-0 mt-16"><Charts/>
    </div>
    <AboutusList/>
   </div>
   </Container>
  
   </>
  );
}
