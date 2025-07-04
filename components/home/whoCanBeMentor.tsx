import Heading from "../heading";
import Image from "next/image";
import { Button } from "../ui/button";

const WhoCanBeMentor = () => {
  return (
    <section className="py-10 px-4 md:px-16">
      <Heading text="Who Can Become a Mentor?" />
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden ">
          <Image
            src="/claylab assets/home/becomeAMentor.png"
            alt="Volunteer Image"
            width={800}
            height={400}
            className="w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-2 py-8 my-auto" >
          <ul className="list-disc list-inside text-gray-800 text-2xl gap-8 flex flex-col pb-8">
            <li className="pl-1">Believes in volunteering and can give 2 hours per week at least for 3 months</li>
            <li>Is at least 20 years old and has had professional awareness and exposure</li>
            <li>Can patiently and humbly work with a child to help them learn and grow</li>
          </ul>
          <Button className="bg-gradient-to-r from-green-800 mx-auto to-green-600  hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500  text-white rounded-md w-min px-16 py-4">
            Join us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoCanBeMentor;
