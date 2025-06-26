import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "",
        "Research-Based Solutions",
        "Data-Driven Decision Making",
        "Nationwide Field Surveys",
        "Market and Social Research",
        "Impact Evaluation Services",
        "Qualitative & Quantitative Studies",
        "Your Trusted Research Partner",
      ],
      typeSpeed: 100,
      backSpeed: 0,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-start flex-wrap gap-2 mb-4 w-full">
      <div className="bg-[#FF6753] rounded-sm p-1 text-center w-auto text-lg md:text-xl whitespace-nowrap">
        🙏🏼
      </div>
      <div className="bg-[rgba(2,2,2,0.05)] px-1 md:p-1 rounded-sm text-sm md:text-xl text-gray-900">
        <span ref={typedElement} />
      </div>
    </div>
  );
};

export default TypedText;
