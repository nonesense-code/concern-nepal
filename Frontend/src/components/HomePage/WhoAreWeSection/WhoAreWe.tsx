const WhoAreWe = () => {
  return (
    <>
      <section className="w-full bg-[#F3F7FA] text-black">
        <div className="container mx-auto text-center px-12 flex items-center justify-center flex-col gap-2">
          <div>
            <h2 className="text-center font-bold text-3xl text-[#003b9f]">
              Who Are We?
            </h2>
            <p className="text-lg leading-relaxed">
              Why do you need concern Nepal for{" "}
              <span className="text-[#D90E31]">your research</span>
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 mt-4">
            <div className="relative flex items-center justify-center flex-col p-2 rounded-4xl bg-[#95ADD1] h-80 md:w-1/2 overflow-hidden">
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
              <div className="z-5 absolute left-40 top-0 md:left-40 md:-top-2 w-60 h-60 rounded-full bg-gradient-to-b from-[rgba(1,56,146,0.5)] to-[rgba(1,56,146,0)]"></div>

              {/* Foreground Content Box */}
              <div className="absolute left-35 top-10 md:left-40 md:top-20 w-52 rounded-3xl bg-gradient-to-b from-[#7993BF] to-[#95ADD1] p-6 h-32 flex flex-col justify-center items-center z-10 shadow-md">
                <h5 className="text-xl font-bold text-white">4+</h5>
                <p className="text-white text-sm text-center">
                  Years of Experience <br />
                  In this Field
                </p>
                <span className="absolute -bottom-4 h-8 w-8 rounded-full bg-[#003b9f]"></span>
              </div>

              <div className="absolute left-35 top-50 md:left-40 md:top-60 w-52 rounded-3xl bg-gradient-to-b from-[#7993BF] to-[#95ADD1] p-6 h-32 flex flex-col justify-center items-center">
                <h5 className="text-xl font-bold text-white">30+</h5>
                <p className="text-white text-sm text-center">
                  Skilled Team Members
                </p>
                <span className="absolute -bottom-4 h-8 w-8 rounded-full bg-[#003b9f]"></span>
              </div>
              <div className="absolute left-35 top-90 md:left-40 md:top-90 lg:left-100 lg:top-60 w-52 rounded-3xl bg-gradient-to-b from-[#7993BF] to-[#95ADD1] p-6 h-32 flex flex-col justify-center items-center">
                <h5 className="text-xl font-bold text-white">100+</h5>
                <p className="text-white text-sm text-center">
                  Projects Completed In The Past Years
                </p>
                <span className="absolute -bottom-4 h-8 w-8 rounded-full bg-[#003b9f]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
