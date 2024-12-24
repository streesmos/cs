"use client"

import { Button } from "../ui/button"
import Link from "next/link"
import { CircleArrowRight } from "lucide-react"

export function AboutList() {
  return (
    <div className="max-w-xl mr-auto px-5 mt-16">

    <div className="text-center">
        <h2 className="font-semibold text-3xl">О нас</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">Компания «Центр современных технологий безопасности информации» (ЦСТБИ) создана для оказания услуг в области технической и информационной безопасности.</p>
    </div>
    <p className="font-semibold text-xl mt-8 ">Основными направлениями деятельности компании являются:</p>
  

    <div className="grid mb-12 md:grid-cols-2 gap-10 mt-8">


        <div className="flex gap-4 items-start">
            <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
            <div>
                <h3 className="font-semibold text-lg">Аттестация объектов информатизации</h3>
              
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Аудит информационной безопасности</h3>
              
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Проведение специальных работ</h3>
               
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Проектирование и монтаж инженерно-технических систем безопасности</h3>
               
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Проведение сертификационных испытаний</h3>
               
            </div>
        </div>


        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Производство технических средств защиты информации</h3>
            </div>
        </div>
        <div className="flex gap-4 items-start">
        <span className="text-sky-700 bg-sky-500/10 p-3 rounded-full">
            <CircleArrowRight />
            </span>
             <div>
                <h3 className="font-semibold text-lg">Поставка технических средств защиты информации</h3>
            </div>
        </div>
        <div className="flex justify-center align-bottom">
             
            <Button className="flex"> <Link href="/aboutus">Подробнее</Link></Button>
            
        </div>


    </div>
    
</div>
  )
}
