"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const ImageData = [
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 24.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 25.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 26.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 27.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 28.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 29.png"
  },
  {
    imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 30.png"
  },
]


export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center overflow-hidden">
      <Image
        src="/claylab assets/general/HeroSectionImages/entrepreneurshipHero.png"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="flex flex-col gap-4 m-auto ">
        <div className="flex flex-col gap-4 mx-14 mt-16 text-start mr-auto max-w-4xl z-10">
          <p style={{ fontWeight: "100" }} className="text-5xl md:text-7xl  text-white mb-6 leading-tight font-sourceSans font-thin" >
            Build • Lead • Change
          </p>
          <p style={{ fontWeight: "100" }} className="text-xl md:text-2xl text-white/70 mb-8 max-w-lg  font-sourceSans font-thin">
            The School of Entrepreneurship empowers school students to become solution-builders — through handson workshops, real-world projects, and 1:1 mentorship.
          </p>
          <Button className="bg-gradient-to-r from-green-800 to-green-600  hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500  text-white rounded-md w-min px-16 py-4">
            Join us
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-center max-w-screen z-10">
          <p className="text-center text-xl md:text-2xl font-sourceSans font-thin w-screen text-white ">Our Partners</p>

          <div className="flex p-4 px-16 justify-around">
            {ImageData.map((data)=>{
              return <Image className={"h-16 !w-auto"} key={data.imgUrl} src={data.imgUrl} height={60} width={80}  alt={"partner logo"}/> 
            })}
          </div>
        </div>
      </div>


    </section>
  )
}
