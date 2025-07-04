"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-14 py-6 z-10 bg-transparent ${isOpen ? "bg-black/95" : ""}`}>
      <div className="text-3xl font-bold text-white">
        <Image
          src={"/claylab assets/general/claylab-logo.png"}
          height={40}
          width={150}
          alt="claylab-logo"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8 text-white">
        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Programs</Link>
        <Button className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-4">
          Support Us
        </Button>
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black/95 text-white flex flex-col items-center space-y-6 py-6 md:hidden z-20">
          <Link href="#" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Programs</Link>
          <Button
            className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-4"
            onClick={() => setIsOpen(false)}
          >
            Support Us
          </Button>
        </div>
      )}
    </header>
  )
}
