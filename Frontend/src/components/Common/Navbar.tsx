import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const token = localStorage.getItem("token");
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <nav className="navbar text-white px-4 md:px-8 top-0 left-0 fixed z-50 w-full">
        <div className="container mx-auto w-full bg-[rgba(10,20,32,0.6)] backdrop-blur-md rounded-full border-1 border-[#afafaf] px-4 mt-4">
          <div className="flex items-center justify-between">
            <section className="flex-shrink-0 py-2">
              <Link to="/" className="outline-none">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10 w-auto cursor-pointer"
                />{" "}
              </Link>
            </section>

            <section className="hidden md:flex items-center justify-center gap-4 font-medium text-lg">
              {[
                "Home",
                "About",
                "Blogs",
                "Our Services",
                "Market Research",
              ].map((item, index) => (
                <a
                  key={index}
                  href={
                    index === 0
                      ? "/"
                      : index === 2
                      ? "/blogs"
                      : `/#${item.toLowerCase().split(" ").join("-")}`
                  }
                  onClick={(e) => {
                    if (index !== 0 && index !== 2) {
                      e.preventDefault();
                      const section = item.toLowerCase().split(" ").join("-");
                      window.location.href = `/#${section}`;
                    }
                  }}
                  className="hover:bg-zinc-600 px-4 py-2 rounded-full outline-none"
                >
                  {item}
                </a>
              ))}
            </section>

            <section className="hidden md:flex gap-3">
              {token && (
                <Link
                  to="/admin"
                  className="outline-none bg-black text-center px-4 py-2 rounded-md active:scale-105 text-white"
                >
                  Admin
                </Link>
              )}
              <button className="outline-none style-button px-4 py-2 rounded-full text-white">
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
          <section className="mt-10 flex items-start justify-center gap-2 flex-col">
            {token && (
              <Link
                to="/admin"
                className="outline-none bg-black text-center px-4 py-2 rounded-md active:scale-105 text-white"
              >
                Admin
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
