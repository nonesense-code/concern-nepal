import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import impacts from "./Impact-data";

const Impact = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Education", "Health", "Economics"];

  const filteredImpacts =
    selectedTag === "All"
      ? impacts
      : impacts.filter((item) => item.tag === selectedTag);

  return (
    <section className="bg-[#F3F7FA] pt-20">
      <div className="py-8 container mx-auto px-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-3xl text-[#003b9f]">
            Read Our Impact
          </h2>
          <p className="mt-4 text-center text-base font-medium text-[#57606d]">
            Case studies showcasing our research contributions
          </p>
          <ul className="mt-8 flex items-center w-1/2 justify-evenly gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1 rounded-md cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#003b9f] text-white"
                    : "bg-white text-black hover:bg-[#003b9f]/10"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredImpacts.map((item, index) => (
              <motion.div
                key={item.heading + index}
                layout
                initial={{ opacity: 0, y: 30, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span
                    className={`${
                      item.tag === "Health" || item.tag === "Economics"
                        ? "bg-[#d90e31]"
                        : "bg-[#003b9f]"
                    } text-white px-3 py-1 rounded-full w-fit text-sm`}
                  >
                    {item.tag}
                  </span>
                  <h4 className="text-[#003b9f] font-semibold text-lg">
                    {item.heading}
                  </h4>
                  <p className="text-gray-700 text-sm leading-snug">
                    {item.para}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Impact;
