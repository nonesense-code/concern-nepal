const WhoAreWe = () => {
  const data = [
    {
      number: "4+",
      des: "Years of Experience In This Field",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[280px] bg-[#01389263] flex flex-col justify-center items-center",
    },
    {
      number: "30+",
      des: "Projects Completed In The Past Years",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[280px] bg-[#01389263] flex flex-col justify-center items-center",
    },
    {
      number: "100+",
      des: "Projects Completed In The Past Years",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[280px] bg-[#01389263] flex flex-col justify-center items-center",
    },
  ];

  return (
    <section className="p-6 ">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B9F]">
            Who are we
          </h2>
          <p className="text-lg mt-2">
            Why do you need Concern Nepal
            <span className="text-[#D90E31] font-semibold"> your research</span>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center ml-12">
          <div className="flex w-[75%] items-center md:justify-center lg:justify-start">
            <div className="w-full bg-[#01389263] rounded-2xl p-8 text-center">
              <h1 className="font-bold text-xl lg:text-2xl mb-4">Who are we</h1>
              <p className="text-lg lg:text-xl w-full">
                We are a research and consulting organization dedicated to
                strengthening democracy and governance in Nepal through
                data-driven insights, strategic capacity building, and
                innovative digital solutions.
              </p>
              <button className="mx-auto mt-6 cursor-pointer text-white py-2 font-semibold rounded-full bg-gradient-to-b from-[#B83662] to-[#2D4D99] w-28">
                About Us
              </button>
            </div>

            <div className="hidden lg:flex items-center justify-center w-20">
              <h4 className="text-[#023892] text-6xl font-extrabold rotate-90 tracking-widest">
                NUMBERS
              </h4>
            </div>
          </div>

          {/* Numbers Cards (visible always) */}
          <div className="relative flex flex-grow-1 flex-wrap justify-center w-full">
            {data.map((item, index) => (
              <>
                <div key={index} className={item.property}>
                  <h1 className="text-white font-bold text-[40px] md:text-[48px]">
                    {item.number}
                  </h1>
                  <p className="text-white font-semibold text-sm md:text-base px-2">
                    {item.des}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
