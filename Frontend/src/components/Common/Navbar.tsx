import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const token = localStorage.getItem("token");
  const toggleMenu = () => setIsMenu(!isMenu);

  const menuItems = [
    "Home",
    "About",
    "Our Services",
    "Blogs",
    "Market Research",
  ];
  const services = [
    "Political Consulting",
    "Leadership Training",
    "Market Research & Surveys",
    "Press Media & Management",
    "Voter Analysis & Data Collection",
    "GIS Mapping & Spatial Analysis",
    "Social Strategy & Management",
    "Policy Review & Management",
    "Election Campign Design & Management",
    "Political Brandinig",
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar text-white px-4 md:px-8 top-0 left-0 fixed z-50 w-full">
        <div className="container mx-auto w-full bg-gradient-to-b from-[#D90E31] to-[#003B9F] rounded-xl border-1 border-[#afafaf] px-4 mt-4">
          <div className="flex items-center justify-between">
            <section className="flex-shrink-0 py-2">
              <Link to="/" className="outline-none">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </section>

            <section className="hidden md:flex items-center justify-center gap-4 font-medium">
              {menuItems.map((item, index) => {
                const isServices = item === "Our Services";

                if (isServices) {
                  return (
                    <div key={index} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition duration-300 px-4 py-2 rounded-full md:text-sm lg:text-lg flex items-center gap-1"
                      >
                        {item}
                        <IoChevronDown
                          className={`transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute left-0 top-full mt-2 w-72 max-h-auto bg-white shadow-lg rounded-md border z-50">
                          {services.map((service, i) => (
                            <a
                              key={i}
                              href={`/#${service
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="flex items-center justify-start px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const href =
                  index === 0
                    ? "/#"
                    : index === 3
                    ? "/blogs"
                    : `/#${item.toLowerCase().replace(/\s+/g, "-")}`;

                return (
                  <a
                    key={index}
                    href={href}
                    onClick={(e) => {
                      if (index !== 0 && index !== 3) {
                        e.preventDefault();
                        const section = item.toLowerCase().replace(/\s+/g, "-");
                        window.location.href = `/#${section}`;
                      }
                    }}
                    className="px-4 py-2 rounded-full md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition duration-300"
                  >
                    {item}
                  </a>
                );
              })}
            </section>

            <section className="hidden md:flex gap-3">
              {token && (
                <Link
                  to="/admin"
                  className="outline-none flex items-center justify-center active:scale-105"
                >
                  <MdAdminPanelSettings className="h-8 w-8" />
                </Link>
              )}
              <button className="outline-none style-button py-2 rounded-full text-white">
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

      {/* Mobile Slide Menu */}
      <section
        className={`flex md:hidden z-60 fixed w-1/2 min-h-screen left-0 top-0 bg-[rgba(10,20,32,0.6)] backdrop-blur-md transition-all duration-200 ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-start w-full flex-col justify-center">
          <div className="flex items-center justify-between w-full text-white">
            <h3 className="text-lg font-medium">Menu</h3>
            <button onClick={toggleMenu}>
              <IoClose className="text-lg" />
            </button>
          </div>

          <div className="mt-20 flex items-start flex-col justify-center gap-2 text-white font-semibold text-lg">
            {menuItems.map((item, index) => {
              const isServices = item === "Our Services";

              if (isServices) {
                return (
                  <div
                    key={index}
                    className="relative w-full"
                    ref={mobileDropdownRef}
                  >
                    <button
                      onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                      className="px-4 py-2 rounded-full outline-none w-full flex items-center justify-between"
                    >
                      {item}
                      <IoChevronDown
                        className={`transition-transform duration-200 ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileDropdownOpen && (
                      <div className="ml-4 mt-1">
                        {services.map((service, i) => (
                          <a
                            key={i}
                            href={`/#${service
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-1 text-white text-sm hover:underline"
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={
                    index === 0
                      ? "/"
                      : index === 3
                      ? "/blogs"
                      : `/#${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  onClick={(e) => {
                    if (index !== 0 && index !== 3) {
                      e.preventDefault();
                      const section = item.toLowerCase().replace(/\s+/g, "-");
                      window.location.href = `/#${section}`;
                    }
                  }}
                  className="px-4 py-2 rounded-full outline-none md:text-sm lg:text-lg"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <section className="mt-10 flex items-start justify-center gap-2 flex-col">
            {token && (
              <Link
                to="/admin"
                className="outline-none flex items-center text-white justify-center active:scale-105"
              >
                <MdAdminPanelSettings className="h-8 w-8" />
              </Link>
            )}
            <button className="outline-none style-button px-4 py-2 rounded-full text-white">
              Contact/Event
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Navbar;
