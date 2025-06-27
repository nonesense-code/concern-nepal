const team = [
  {
    name: "Nabaraj Khanal",
    title: "Managing Director",
    image: "/images/expert/nawaraj Khanal.png",
  },
  {
    name: "Narayan Panthi",
    title: (
      <>
        Research and Data <br /> Strategist
      </>
    ),
    image: "/images/expert/Narayan Panthi.png",
  },
  {
    name: "Rajan Bhandari",
    title: "Researcher",
    image: "/images/expert/Rajan Bhandari.png",
  },
  {
    name: "Roshan Khanal",
    title: (
      <>
        Technology and Digital <br /> Operations Manager
      </>
    ),
    image: "/images/expert/Roshan Khanal.png",
  },
];

export default function ExpertsSection() {
  return (
    <section className="text-center py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
          The Experts Behind Our Research
        </h2>
        <p className="text-gray-600 mb-10">
          Meet our dedicated team of researchers, analysts, and consultants.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-100 shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={
                    typeof member.name === "string"
                      ? member.name
                      : "Team Member"
                  }
                  className="object-cover w-full h-full object-top"
                />
              </div>
              <h3 className="text-blue-900 font-semibold text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-pink-600 font-medium mt-1">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
