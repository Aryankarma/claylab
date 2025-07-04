import Heading from "../heading";
import Image from "next/image";


const AwardsAndRecognitions = () => {


 const awardsData = [
    {
      logo: "/claylab assets/home/awardsAndRecognition/1631346672537 1.png",
      title: "SCHAEFFLER",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/22993000000075010 1.png",
      title: "United India",
      description: "Lorem Ipsum is simply dummy text of the printing...",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
      title: "Wipro",
      description: "Lorem Ipsum is simply dummy text of the printing...",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
      title: "Shubh 107.8 FM",
      description: "Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/download.png",
      title: "Foundation",
      description: "Lorem Ipsum is simply dummy text of the printing...",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/images 1.png",
      title: "Teach For All",
      description: "Lorem Ipsum is simply dummy text of the printing...",
    },
  ];
  

  return (
    <section className="py-12 px-4 md:px-16">
      <Heading text="Awards & Recognitions" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {awardsData.map((award, idx) => (
          <div
            key={idx}
              className="bg-white rounded-xl p-4 shadow-sm border text-center flex flex-col items-center gap-2"
          >
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={award.logo}
                alt={award.title}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-sm font-semibold mt-2">{award.title}</h4>
            <p className="text-xs text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAndRecognitions;
