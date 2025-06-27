const Ready = () => {
  return (
     <div className="bg-gradient-to-r from-[#003B9F] via-[#5E2A8A] to-[#D90E31] text-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Ready to Make Data-Driven Decisions?
      </h2>
      <p className="text-lg mb-8">
        Partner with Nepal's leading research consultancy for evidence-based solutions
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-[#003B9F] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
          Request Proposal
        </button>
        <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#D90E31] transition">
          Let’s Talk
        </button>
      </div>
    </div>
  )
}

export default Ready
