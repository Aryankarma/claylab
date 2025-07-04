import Image from 'next/image'

const ImageData = [
  {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg1.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp1.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg2.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp2.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg3.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp3.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg4.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp4.png"
  }
]

const PastStories = () => {
  return <div className='py-16 px-4 md:px-16 gap-4 flex flex-col '>

    <h3 className='text-center font-roughScript text-6xl font-bold text-green-800 mb-[-2%]'>Past Stories</h3>
    <Image src={"/claylab assets/general/brushGraphics2.png"} height={8} width={500} className="max-w-3xl mx-auto" alt={"underline"} />
    <div className="flex justify-between mx-auto">
      {ImageData.map((imageCard) => {
        return <div key={imageCard.ImageUrl} className='relative flex w-fit'>
          <Image className='rounded-xl' src={imageCard.ImageUrl} height={400} width={300} alt={"Image-bg"} />
          <Image className="rounded-full absolute bottom-[-5%] left-[37%]" src={imageCard.pfpUrl} height={75} width={75} alt={"Image-pfp"} />
        </div>
      })}
    </div>
  </div>
}

export default PastStories