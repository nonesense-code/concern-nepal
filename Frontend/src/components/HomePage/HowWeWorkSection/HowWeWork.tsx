const steps = [
  {
    number: 1,
    title: "Consultation",
    description: "Understanding your needs and challenges",
  },
  {
    number: 2,
    title: "Research",
    description: "Analyzing requirements and best practices",
  },
  {
    number: 3,
    title: "Development",
    description: "Building customized solutions",
  },
  {
    number: 4,
    title: "Implementation",
    description: "Deploying and training your team",
  },
  {
    number: 5,
    title: "Support",
    description: "Ongoing maintenance and assistance",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="text-center py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#003087] mb-2">
          How We Work
        </h2>
        <p className="mb-8 text-base text-[#333]">
          Our proven methodology for successful{" "}
          <span className="text-crimson">digital transformation</span>
        </p>

        <div className="flex justify-center flex-wrap gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-36 text-center flex flex-col items-center"
            >
              <div className="mb-4 bg-gradient-to-br from-[#DA133B] to-[#003b9f] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h4 className="text-[#003087] font-semibold mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-[#666]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
