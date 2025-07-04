"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      <Image
        src="/claylab assets/general/HeroSectionImages/homeHero.png"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="flex flex-col gap-8 mx-14 mt-44 text-start max-w-4xl z-10">
        <p style={{fontWeight: "100"}} className="text-5xl md:text-7xl  text-white mb-6 leading-tight font-sourceSans font-thin" >
          Empowering Youth <br />
          Through Mentorship & <br />
          Entrepreneurship
        </p>
        <p style={{fontWeight:"100"}} className="text-3xl md:text-2xl text-white/70 mb-8 max-w-lg  font-sourceSans font-thin">
          Bridging opportunity gaps with guided mentorship and practical
          entrepreneurship education.
        </p>
        <Button className="bg-gradient-to-r from-green-800 to-green-600  hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500  text-white rounded-md w-min px-16 py-4">
          Join us
        </Button>
      </div>
    </section>
  )
}
