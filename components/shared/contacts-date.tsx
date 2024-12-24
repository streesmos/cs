
import Link from "next/link"
import { Clock8, Mail, MapPin, PhoneCall } from "lucide-react"


export function ContactsDate() {
  return (
   
    <div className="flex gap-6 justify-between mt-12 w-full flex-col  lg:flex-row">
    <div className="flex w-full flex-col">  
    <h3 className=" text-2xl text-gray-900">Полное и сокращенное наименование, в том числе на иностранном языке :</h3>
   <p className=" text-lg text-gray-700">Общество с ограниченной ответственностью «Центр современных технологий безопасности информации»</p>
   <p className=" text-lg text-gray-700">ООО «ЦСТБИ»</p>
   <p className=" text-lg text-gray-700">«Centre for modern information security technology» Limited liability company</p>
   <p className=" text-lg text-gray-700">«CMIST» LLC</p>
    </div>

    <div className="w-full">  
        <ul className="list-disc text-lg text-gray-700">
            <li>Регистрационный номер (ОГРН): 1097746522576</li>
            <li>Дата государственной регистрации: 09 сентября 2009г г. Москва</li>
            <li>Наименование регистр. Органа: Межрайонная инспекция Федеральной налоговой службы № 46 по г. Москве</li>
            <li>Юредический адрес: 127474, г. Москва, Дмитровское ш., д.60А, вн. тер. г. муниципальный округ Бескудниковский, ш. Дмитровское, д. 60А, помещ. 1А, ком. 1-7, 58 (часть), 69, 70-77, 79, 80, 81, 82.</li>
            <li>ИНН: 7713691508</li>
            <li>ОКПО: 62791035</li>
            <li>КПП: 771301001</li>
        </ul>
    </div>
    </div>
  )
}
