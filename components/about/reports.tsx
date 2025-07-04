'use client';


import Image from "next/image"
import Heading from '../heading';

export default function ReportsSection() {
  return (
    <section className="text-center py-16 px-4 rounded-none shadow-md">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <Image src={"/claylab assets/aboutUs/documentIcon.png"} height={150} width={130} alt={"document icon"} />
      </div>


      <Heading text="REPORTS & DOCUMENTATION" />

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-700 text-sm md:text-base mb-6">
        We prioritize transparency as we believe it is crucial to foster trust and accountability
        in our actions and initiatives.
      </p>

      {/* Button */}
      <button className="px-12 py-2 text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg transition-all">
        More Reports
      </button>

    </section>
  );
}
