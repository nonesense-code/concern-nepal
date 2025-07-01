const WhoAreWe = () => {
  const data = [
    {
      number: "4+",
      des: "Years of Experience In This Field",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-[#01389263] flex flex-col justify-center items-center",
    },
    {
      number: "",
      des: "",
      property:
        "h-[240px] hidden md:block text-center m-2 rounded-2xl w-[293px] bg-white flex flex-col justify-center items-center",
    },
    {
      number: "30+",
      des: "Skilled Team Members",
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-white flex flex-col justify-center items-center",
    },
    {
      number: "100+",
      des: "Projects Completed In The Past Years",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-[#01389263] flex flex-col justify-center items-center",
    },
  ];

 
  return (
    <section className="h-[90vh] p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003B9F]">
          Who are we
        </h2>
        <p className="text-lg mt-2">
          Why do you need concern Nepal
          <span className="text-[#D90E31] font-semibold"> your research</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 md:ml-24">
        {/* Left Paragraph */}
        <div className="w-full lg:w-[35%] bg-[#01389263] rounded-2xl p-8 text-center max-w-[600px]">
          <h1 className="font-bold text-2xl mb-4">Who are we</h1>
          <p className="text-lg md:text-xl">
            We are a research and consulting organization dedicated to
            strengthening democracy and governance in Nepal through data-driven
            insights, strategic capacity building, and innovative digital
            solutions.
          </p>
          <button className="mx-auto mt-6 cursor-pointer text-white py-2 font-semibold rounded-full bg-gradient-to-b from-[#B83662] to-[#2D4D99] w-28">
            About Us
          </button>
        </div>

        {/* NUMBERS TEXT (hidden on small devices) */}
        <div className="hidden lg:flex items-center justify-center w-20">
          <h4 className="text-[#023892] text-5xl font-extrabold rotate-90 tracking-widest">
            NUMBERS
          </h4>
        </div>

       <div className="flex flex-wrap justify-center w-full lg:w-[50%]">
          {data.map((item, index) => (
            <div key={index} className={item.property}>
              <h1 className="text-white font-bold text-[40px] md:text-[48px]">
                {item.number}
              </h1>
              <p className="text-white font-semibold text-sm md:text-base px-2">
                {item.des}
              </p>
      {/* bottom */}
      <div className="flex items-center justify-center   h-[70vh]  ">
        {/* left paragraph */}
        <div className="w-[35%] ml-44 h-90 flex flex-col rounded-2xl bg-[#01389263] p-7 text-center">
          <h1 className="font-bold text-[40px]">Who are we</h1>
          <p className="text-[32px]">
            We are a research and consulting organization dedicated to
            strengthening democracy and governance in Nepal through data-driven
            insights, strategic capacity building, and innovative digital
            solutions.{" "}
          </p>
          <div className="flex">
            <button className=" m-auto mt-4 cursor-pointer text-white font-semibold rounded-full bg-gradient-to-b from-[#B83662] to-[#2D4D99] w-28">
              About Us
            </button>
          </div>
        </div>

        {/* numbers */}
        <div className="hidden lg:flex items-center justify-center w-20  ">
          <h4 className="text-[#023892] text-5xl font-extrabold rotate-90 tracking-widest">
            NUMBERS
          </h4>
        </div>
        {/* bottom right */}
        <div className="flex flex-wrap w-[50%] ">
          {data.map((item, index) => (
            <div key={index} className={item.property}>
              <h1 className="text-white font-bold text-[48px]">
                {item.number}
              </h1>
              <p className="text-white font-bold">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
