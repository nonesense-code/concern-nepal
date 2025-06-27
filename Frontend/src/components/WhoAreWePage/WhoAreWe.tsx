const WhoAreWe = () => {
  return (
    <>
      <section className="w-full bg-[#f3f7fa] text-black">
        <div className="container mx-auto text-center px-12 flex items-center justify-center flex-col gap-2 overflow-x-hidden">
          <div>
            <h2 className="text-center font-bold text-3xl text-[#003b9f]">
              Who Are We?
            </h2>
            <p className="text-lg leading-relaxed">
              Why do you need concern Nepal for{" "}
              <span className="text-[#D90E31]">your research</span>
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 mt-8">
            <div className="p-4 rounded-4xl bg-[#95ADD1] md:w-1/2">
              <h2 className="text-lg font-semibold text-black">Who are we</h2>
              <p className="mt-4 text-base font-medium">
                We are a research and consulting organization dedicated to
                strengthening democracy and governance in Nepal through
                data-driven insights, strategic capacity building, and
                innovative digital solutions.
              </p>
              <button className="mt-4 px-4 py-2 font-semibold rounded-full border-[#DB143C] border-1 text-white bg-gradient-to-b from-[#B83662] to-[#2D4D99]">
                About Us
              </button>
            </div>
            <div className="w-full relative h-120">
              <h4 className="absolute -left-20 top-50 md:-left-30 uppercase text-[#023892] text-6xl rotate-90 font-bold">
                Numbers
              </h4>
              <div className="absolute left-40 top-0 md:left-55 md:top-0 w-52 h-52 rounded-full bg-gradient-to-b from-[rgba(1,56,146,0.6)] to-[rgba(1,56,146,0)] blur-sm"></div>

              {/* Foreground Content Box */}
              <div className="absolute left-35 top-10 md:left-40 md:top-10 w-52 rounded-3xl bg-gradient-to-t from-[rgba(1,56,146,0.39)] to-[rgba(1,56,146,0.6)] p-6 h-32 flex flex-col justify-center items-center z-10 shadow-md">
                <h5 className="text-xl font-bold text-white">4+</h5>
                <p className="text-white text-sm text-center">
                  Years of Experience <br />
                  In this Field
                </p>
              </div>

              <div className="absolute left-35 top-50 md:left-40 md:top-50 w-52 rounded-3xl bg-gradient-to-t from-[rgba(1,56,146,0.39)] to-[rgba(1,56,146,0.6)]  p-6 h-32 flex flex-col justify-center items-center">
                <h5 className="text-xl font-bold text-white">30+</h5>
                <p className="text-white text-sm text-center">
                  Skilled Team Members
                </p>
              </div>
              <div className="absolute left-35 top-90 md:left-40 md:top-90 lg:left-100 lg:top-50 w-52 rounded-3xl bg-gradient-to-t from-[rgba(1,56,146,0.39)] to-[rgba(1,56,146,0.6)]  p-6 h-32 flex flex-col justify-center items-center">
                <h5 className="text-xl font-bold text-white">100+</h5>
                <p className="text-white text-sm text-center">
                  Projects Completed In The Past Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
