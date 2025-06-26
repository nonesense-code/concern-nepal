import About from "../AboutPage/About";
import Service from "../ServicePage/Service";
import TypedText from "../../utils/TypedText";
const Home = () => {
  return (
    <>
      <section className="bg-[rgba(2,2,2,0.05)] overflow-hidden">
        <div className="container mx-auto pt-24 md:pt-32 px-4 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-5xl md:text-7xl uppercase text-black font-extrabold">
                We are <span className="text-[#0e368d]">research</span> company
              </h2>
              <TypedText />
              <p className="text-base md:text-lg font-medium text-gray-700">
                A complete research-based consulting company: Research Design,
                <br />
                Data Collection/Analysis, and Survey.
              </p>
              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <button className="text-white bg-gradient-to-r from-[#DB143C] to-[#0d368d] px-6 py-3 rounded-full font-semibold transition hover:opacity-90">
                  Let's get started
                </button>
                <button className="text-[#DB143C] font-semibold hover:underline transition">
                  Discover our work
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/mainimage.png"
                className="w-full h-auto object-contain"
                alt="Research Illustration"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
    </>
  );
};

export default Home;
