import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[bg-gradient-to-b from-[#c91743] to-purple-600] to-[#193489] fixed z-50 w-full">
        <div className="container mx-auto w-full">
          <div className="flex items-center justify-between">
            <section className="flex-shrink-0 py-2">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-8 w-auto md:h-12 cursor-pointer object-contain"
                />
              </Link>
            </section>

            <section className="hidden md:flex items-center justify-center gap-4 text-white font-medium text-lg">
              {["Home", "About", "Our Services", "Market Research"].map(
                (item, index) => (
                  <Link
                    key={index}
                    to={
                      index === 0
                        ? "/"
                        : `/${item.toLowerCase().split(" ").join("-")}`
                    }
                  >
                    {item}
                  </Link>
                )
              )}
            </section>
            
            <section className="hidden md:flex">
              <button className="bg-white rounded-md shadow-gray-600 shadow-md text-pink-600 font-semibold text-lg px-2 py-1">
                Contact/Event
              </button>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
