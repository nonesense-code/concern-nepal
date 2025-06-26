const Impact = () => {
  return (
    <>
      <section className="bg-[#F3F7FA]">
        <div className="py-8 container mx-auto px-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-bold text-3xl text-[#003b9f]">
              Read Our Impact
            </h2>
            <p className="mt-4 text-center text-base font-medium text-[#57606d]">
              Case studies showcasing our research contributions
            </p>
            <ul className="mt-8 flex items-center w-1/2 justify-evenly gap-2">
              <li className="px-4 py-1 rounded-md bg-white active:text-white cursor-pointer active:bg-[#003b9f] text-[#003b9f]">
                All
              </li>
              <li className="px-4 py-1 rounded-md bg-white active:text-white cursor-pointer active:bg-[#003b9f] text-[#003b9f]">
                Education
              </li>
              <li className="px-4 py-1 rounded-md bg-white active:text-white cursor-pointer active:bg-[#003b9f] text-[#003b9f]">
                Health
              </li>
              <li className="px-4 py-1 rounded-md bg-white active:text-white cursor-pointer active:bg-[#003b9f] text-[#003b9f]">
                Economics
              </li>
            </ul>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white">
              <img
                src="/images/Health-service.png"
                alt="Health"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <span className="bg-[#d90e31] text-white px-3 py-1 rounded-full w-fit text-sm">
                  Health
                </span>
                <h4 className="text-[#003b9f] font-semibold text-lg">
                  Services of स्वयंसेवक
                </h4>
                <p className="text-gray-700 text-sm leading-snug">
                  National Female Community Health Volunteers Day! The Female
                  Community Health Volunteers (FCHVs) program is running since
                  1988 in Nepal.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white">
              <img
                src="/images/Education.png"
                alt="Education"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <span className="bg-[#003b9f] text-white px-3 py-1 rounded-full w-fit text-sm">
                  Education
                </span>
                <h4 className="text-[#003b9f] font-semibold text-lg">
                  Female Community Health Volunteers (FCHVs){" "}
                </h4>
                <p className="text-gray-700 text-sm leading-snug">
                  Taking MUAC measurements and providing Vitamin A
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white">
              <img
                src="/images/Presentation.png"
                alt="Presentation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <span className="bg-[#d90e31] text-white px-3 py-1 rounded-full w-fit text-sm">
                  Economics
                </span>
                <h4 className="text-[#003b9f] font-semibold text-lg">
                  Presentation of Mothers{" "}
                </h4>
                <p className="text-gray-700 text-sm leading-snug">
                  Presenting the report on “Mothers/caretakers perception on
                  services provided by FCHVs: A study of Melung Rural
                  Municipality and Tarkeshwor Municipality, Nepal.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
