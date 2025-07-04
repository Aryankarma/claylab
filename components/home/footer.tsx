import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-16 py-10 text-black">
      {/* Top grid: Logo, Nav, Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#2e6651] pb-8">
        {/* Logo + Email */}
        <div className="flex flex-col gap-2">
          <Image
            src="/claylab assets/general/claylab-logo.png"
            alt="Claylab Logo"
            width={140}
            height={50}
          />
          <a
            href="mailto:claylableducation@gmail.com"
            className="text-sm underline"
          >
            claylableducation@gmail.com
          </a>
        </div>

        {/* Nav + Address */}
        <div className="flex flex-col gap-4">
          <nav className=" flex gap-6 justify-end align-center text-sm">
            <a href="#" className="hover:underline block">About us</a>
            <a href="#" className="hover:underline block">Contact us</a>
            <a href="#" className="hover:underline block">Programs</a>
            <a href="#" className="hover:underline block">Mentorship</a>
          </nav>
          <address className="text-end text-sm">
            525 First floor Sector 9–A Gurugram, Haryana 122001 India
          </address>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap md:justify-end justify-center items-center gap-4 mt-4">
        <a
          href="#"
          className="flex items-center gap-2 text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaXTwitter /> Twitter
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          <FaFacebookF /> Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
