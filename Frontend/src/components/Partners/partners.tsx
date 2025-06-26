import partners from "./partner-name";
import testimonials from "./partnerTestimonial";

const PartnerSection = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-[#003B9F] font-bold text-2xl mb-6">
            What Our Partners Say
          </h2>

          <div className="space-y-6">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="bg-[#F6F9FB] cursor-pointer rounded-xl p-6 border-l-4 border-red-500 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <p className="text-gray-800 mb-4">"{item.message}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <p className="text-[#003B9F] font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-[#003B9F] font-bold text-2xl mb-6">Our Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#F6F9FB] px-6 py-4 text-center rounded-lg font-semibold text-gray-700 
                hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
