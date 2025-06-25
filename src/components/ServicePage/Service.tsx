import ourServices from "./ServiceList";

const Service = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16 ">

      <div className="container mx-auto ">
      <div className="text-center mb-10 ">
        <div className="flex items-center justify-center gap-4 ">
          <div className="border-t-4 border-t-[#DB143C]   w-22"></div>
          <div className=""> <h2 className="text-3xl font-bold text-black mb-2">Our Services</h2></div>
            <div className="border-t-4 border-t-[#013892] w-22"></div>
        </div>
       
        <p className="text-gray-700 text-lg">
          Why do you need{" "}
          <span className="text-blue-600 font-semibold">Concern Nepal</span> for your research?
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ourServices.map((item, index) => (
          <div
            key={index}
            className="bg-[#F3F7FA] p-6 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            
            <div className="flex items-center justify-start mb-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img src={item.icon} alt={item.title} className="h-8 w-8 object-contain" />
              </div>
            </div>

         
            <div className="text-xl font-semibold text-blue-800 mb-2">{item.title}</div>

            
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Service;