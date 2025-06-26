import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: "rgba(10,20,32,0.6)",
      color: "white",
      scrollTrigger: {
        trigger: "body",
        start: "top 0%",
        end: "top -10%",
        scrub: 0.6,
      },
    });
  });

  return (
    <>
      <nav className="navbar text-black px-4 backdrop-blur-md md:px-6 lg:px-8 top-0 left-0 border-b border-1 border-[#afafaf] fixed z-50 w-full">
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-between">
            <section className="flex-shrink-0 py-2">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10 w-auto cursor-pointer"
                />{" "}
              </Link>
            </section>

            <section className="hidden md:flex items-center justify-center gap-4 font-medium text-lg">
              {["Home", "About", "Our Services", "Market Research"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={
                      index === 0
                        ? "#"
                        : `#${item.toLowerCase().split(" ").join("-")}`
                    }
                    className="hover:underline"
                  >
                    {item}
                  </a>
                )
              )}
            </section>

            <section className="hidden md:flex">
              <button className="bg-white rounded-md shadow-gray-600 shadow-md text-pink-600 font-semibold text-lg px-2 py-1">
                Contact/Event
              </button>
                    
            </section>

            {/* Responsive */}
            <section className="flex md:hidden">
              <button onClick={toggleMenu}>
                <IoMenu className="text-white text-lg" />
              </button>
            </section>
          </div>
        </div>
      </nav>
      <section
        className={`z-60 fixed w-1/2 min-h-screen left-0 top-0 bg-[rgba(10,20,32,0.6)] backdrop-blur-md transition-all duration-200 ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-start w-full flex-col justify-center">
          <div className="flex items-center justify-between w-full text-white">
            <div>
              <h3 className="text-lg font-medium">Menu</h3>
            </div>
            <button onClick={toggleMenu}>
              <IoClose className="text-lg" />
            </button>
          </div>
          <div className="mt-20 flex items-start flex-col justify-center gap-2 text-white font-semibold text-lg">
            {["Home", "About", "Our Services", "Market Research"].map(
              (item, index) => (
                <a
                  onClick={toggleMenu}
                  key={index}
                  href={
                    index === 0
                      ? "#"
                      : `#${item.toLowerCase().split(" ").join("-")}`
                  }
                  className="hover:underline"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="mt-10">
            <button className="rounded-md border-1 active:bg-black active:text-white shadow-gray-600 shadow-md text-[#fff] font-semibold text-lg px-2 py-1">
              Contact/Event
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
