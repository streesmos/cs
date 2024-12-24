import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { ContactsMain } from "@/components/shared/contacts-main";
import { ContactsDate } from "@/components/shared/contacts-date";


export default async function Contacts() {

  return ( <>
 
   <Container className="flex flex-col items-center justify-between p-8 lg:flex-col">
   <Title text="СВЯЗАТЬСЯ С НАМИ" className="text-base text-left font-bold md:text-2xl"/>
   <ContactsMain/>
   <ContactsDate/>
   </Container>
  
   </>
  );
}
