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
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-white flex flex-col justify-center items-center",
    },
    {
      number: "100+",
      des: "Projects Completed In The Past Years",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-[#01389263] flex flex-col justify-center items-center",
    },
    {
      number: "100+",
      des: "Projects Completed In The Past Years",
      property:
        "h-[240px] text-center m-2 rounded-2xl w-[293px] bg-[#01389263] flex flex-col justify-center items-center",
    },
  ];
  return (
    // <section className="w-full bg-[#F3F7FA] text-black py-16 border">
    //   <div className="container mx-auto px-6 lg:px-20">
    //     {/* Title */}
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold text-[#003B9F]">
    //         Who are we
    //       </h2>
    //       <p className="text-lg mt-2">
    //         Why do you need concern Nepal for{" "}
    //         <span className="text-[#D90E31] font-semibold">your research</span>
    //       </p>
    //     </div>

    //     {/* Main Content */}
    //     <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center " >
    //       {/* Left Box */}
    //       <div className="bg-[#95ADD1] text-center rounded-3xl p-8 shadow-lg flex flex-col  items-center justify-center h-45 w-full">
    //         <h3 className="text-xl font-bold text-black">Who are we</h3>
    //         <p className="text-base mt-4 leading-relaxed font-medium text-black">
    //           We are a research and consulting organization dedicated to
    //           strengthening democracy and governance in Nepal through
    //           data-driven insights, strategic capacity building, and
    //           innovative digital solutions.
    //         </p>
    //         <button className="mt-6 px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-b from-[#B83662] to-[#2D4D99]">
    //           About Us
    //         </button>
    //       </div>

    //       {/* Vertical Numbers  */}
    //       <div className="hidden lg:flex items-center justify-center">
    //         <h4 className="text-[#023892] text-6xl font-bold rotate-90 tracking-widest">
    //           NUMBERS
    //         </h4>
    //       </div>

    //      {/* bottom right section */}
    //       <div className="relative h-[28rem] flex items-center justify-center">
    //         {/* Background Circle */}
    //         <div className="absolute w-72 h-72 rounded-full bg-gradient-to-b from-[rgba(1,56,146,0.5)] to-transparent top-0 left-1/2 -translate-x-1/2"></div>

    //         {/* Stat Cards */}
    //         <div className="flex flex-col gap-6 z-10">
    //           {/* Experience */}
    //           <div className="relative bg-gradient-to-b from-[#7993BF] to-[#95ADD1] text-white p-6 rounded-3xl w-64 text-center shadow-md">
    //             <h5 className="text-2xl font-bold">4+</h5>
    //             <p className="text-sm mt-1 leading-tight">
    //               Years of Experience <br /> In This Field
    //             </p>
    //             <span className="absolute -bottom-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-[#003B9F]"></span>
    //           </div>

    //           {/* Team Members and Projects */}
    //           <div className="flex gap-6">
    //             {/* Team */}
    //             <div className="relative bg-gradient-to-b from-[#7993BF] to-[#95ADD1] text-white p-6 rounded-3xl w-64 text-center shadow-md">
    //               <h5 className="text-2xl font-bold">30+</h5>
    //               <p className="text-sm mt-1 leading-tight">Skilled Team Members</p>
    //               <span className="absolute -bottom-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-[#003B9F]"></span>
    //             </div>
    //             {/* Projects */}
    //             <div className="relative bg-gradient-to-b from-[#7993BF] to-[#95ADD1] text-white p-6 rounded-3xl w-64 text-center shadow-md">
    //               <h5 className="text-2xl font-bold">100+</h5>
    //               <p className="text-sm mt-1 leading-tight">
    //                 Projects Completed <br /> In The Past Years
    //               </p>
    //               <span className="absolute -bottom-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-[#003B9F]"></span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="h-[90vh] p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003B9F]">
          Who are we
        </h2>
        <p className="text-lg mt-2">
          Why do you need concern Nepal
          <span className="text-[#D90E31] font-semibold"> your research</span>
        </p>
      </div>

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
    </div>
  );
};

export default WhoAreWe;
