
import Link from "next/link"
import { Clock8, Mail, MapPin, PhoneCall } from "lucide-react"


export function ContactsMain() {
  return (
   
    <div className="flex gap-6 justify-between mt-8 w-full flex-col  lg:flex-row">
    <div className="flex w-full">  
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A65d2328c65ea76911f60592ec357f2c283cbf115a243902fbd033ee7b52dd162&amp;source=constructor" width="100%" height="365" ></iframe>
    </div>

    <div className="w-full">  
    <h3 className=" text-4xl text-gray-900">Как связаться с<span className="text-orange-400"> ЦСТБИ</span></h3>

    <div className="grid mb-12 md:grid-cols-2 gap-10 mt-8">


        <div className="flex gap-4 items-start">
            <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <MapPin/>
            </span>
            <div>
                <h3 className="font-semibold text-lg">ФАКТИЧЕСКИЙ АДРЕС</h3>
            <p className="mt-1 text-gray-500">г. Москва, 127474, Город Москва, Дмитровское шоссе, 60А. БЦ Лихоборский </p>
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
      <PhoneCall/>
            </span>
             <div>
             <h3 className="font-semibold text-lg">ТЕЛЕФОН</h3>
              
               <Link href="tel:+74956493295"><p className="mt-1 text-gray-500">+7 (495) 649 32 95 </p> </Link>
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
        <Clock8/>
            </span>
             <div>
                <h3 className="font-semibold text-lg">РАБОЧИЕ ЧАСЫ</h3>
                <p className="mt-1 text-gray-500"> Понедельник-Пятница 9:00-18:00</p>
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
        <Mail/>
            </span>
             <div>
                <h3 className="font-semibold text-lg">EMAIL</h3>
                <Link href="mailto:info@cstbi.ru"><p className="mt-1 text-gray-500">info@<span className="text-orange-400">cstbi.ru</span></p> </Link>
            </div>
        </div>


        


    </div>
    </div>
    </div>
  )
}
