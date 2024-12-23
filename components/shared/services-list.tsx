import { Container } from "./container"
import Image from "next/image"

export function ServicesList() {
  return (
    <div className="max-w-5xl mx-auto px-5 mt-16">

    <div className="text-center">
        
        <p className=" text-xl text-gray-500">Помимо реализации продукции собственного производства под торговой маркой <span className="text-orange-400">СТБ</span> мы также  предлагаем к поставкам широкий спектр оборудования по безопасности известных отечественных и импортных производителей:</p>
    </div>
    <Container className="flex gap-6 justify-between mt-8">
    <div className="flex flex-col align-middle mx-auto justify-end w-full self-center items-center">  
      <Image width={100} height={100} className="h-24 mb-4"  src="/sr.png" alt="" />
    <h4 className="text-center">Технические средства защиты информации и обнаружения каналов утечки информации</h4>
    </div>
    <div className="flex flex-col align-middle mx-auto justify-end w-full self-center items-center ">  
    <Image width={100} height={100} className=" h-24 mb-4"  src="/si.png" alt="" />
    <h4>Антитеррористическое и досмотровое оборудование</h4>
    </div>
    <div className="flex flex-col align-middle mx-auto justify-end w-full self-center items-center ">  
    <Image width={100} height={100} className=" h-24 mb-4"  src="/abi.png" alt="" />
    <h4>Программно-аппаратные средства защиты информации от НСД, антивирусное и прикладное ПО</h4>
    </div>
    </Container>
</div>
  )
}
