import Image from "next/image";
import Heading from "../heading";

const WhyWeExist = () => {
  return (
    <section className=" py-10 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left Content */}
      <div className="max-w-xl">
        <Heading text="Why we exist?" />
        <p className="text-2xl md:text-3xl text-gray-800">
          <strong>Guiding youth</strong> through <strong>one-on-one mentorship</strong> and real-world skills.{" "}
          <strong>Claylab</strong> exists to bridge this gap and empower youth to become informed,
          confident, and capable leaders.
        </p>
      </div>

      {/* Right Content */}
      <div className="relative flex-shrink-0">
        <Image
          src="/claylab assets/general/circleGraphics.png"
          alt="abstract shape"
          width={700}
          height={240}
          className="w-[80%] md:w-[100%] h-auto z-10"
        />

        <p className="absolute top-48 left-48 text-xl md:text-2xl text-gray-700 z-20">
          “3,000+ students supported<br /> over the past 3 years”
        </p>
      </div>
    </section>
  );
};

export default WhyWeExist;
