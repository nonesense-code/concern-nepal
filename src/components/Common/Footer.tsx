import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E40B2]">
        <div className="container mx-auto text-white px-16 py-10 border-b border-[#afafaf]">
          <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-2">
            <div className="flex items-start justify-center flex-col gap-2">
              <h2 className="text-lg">Concern</h2>
              <p className="w-72">
                Empowering change through research and data-driven insights
                across Nepal.
              </p>
              <ul>
                <li className="flex items-start justify-center gap-2">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </li>
              </ul>
            </div>
            <div className="flex gap-2 flex-col">
              <h2>Quick Links</h2>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Research Projects</li>
                <li>Publications</li>
              </ul>
            </div>
            <div className="flex gap-2 flex-col">
              <h2>Contact info</h2>
              <ul>
                <li className="flex items-center justify-start gap-1">
                  <IoLocation />
                  Kathmandu, Nepal
                </li>
                <li className="flex items-center justify-start gap-1">
                  <FaPhoneAlt />
                  +977 980-1834583
                </li>
                <li className="flex items-center justify-start gap-1">
                  <MdEmail />
                  info@concernnepal.org
                </li>
              </ul>
            </div>
            <div className="flex gap-2 flex-col">
              <h2>Newsletter</h2>
              <p>Stay updated with our latest research</p>
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-full pr-10 pl-4 py-1 bg-white overflow-hidden rounded-md shadow-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 px-3 top-1/2 -translate-y-1/2 bg-[#d90e31] h-full"
                >
                  <BsFillSendFill className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-base font-base py-4 text-white">
          &copy; {new Date().getFullYear()} Concern Nepal. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
