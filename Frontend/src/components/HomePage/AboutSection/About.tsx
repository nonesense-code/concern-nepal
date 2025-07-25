const About = () => {
  return (
    <>
      <section className="bg-[rgba(2,2,2,0.05)]" id="about">
        <div className="container mx-auto w-full pt-20 px-4 lg:px-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-4 ">
              <div className="border-t-4 border-t-[#DB143C] w-22"></div>
              <div className="">
                <h2 className="text-3xl font-bold text-black mb-2">About us</h2>
              </div>
              <div className="border-t-4 border-t-[#013892] w-22"></div>
            </div>
            <h4 className="text-center uppercase tracking-tight text-lg md:text-4xl">
              Exceptional Insights for Meaningful{" "}
              <span className="text-[#db143c]">Impact</span>
            </h4>
            <p className="text-center font-medium text-base">
              Explore our innovative research and consulting services designed
              to elevate your <span className="text-[#013892]">strategy</span>{" "}
              and <span className="text-[#013892]">drive real change.</span>
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="w-full h-full">
              <img src="/images/about-banner.png" />
            </div>
            <p className="h-full w-full text-lg font-medium">
              Concern Nepal is a premier research and consulting firm dedicated
              to providing innovative and data-driven solutions in the fields of
              electoral, political, social, policy analysis, and market
              research. Established in 2022, the organization has carved a niche
              in delivering impactful services tailored to meet the diverse
              needs of its clients. Among its core offerings, political
              consulting and political leadership training stand out as key
              pillars, designed to empower political leaders, institutions, and
              stakeholders with strategic insights and actionable plans. In the
              realm of political consulting, Concern Nepal specializes in
              crafting comprehensive strategies that address the dynamic
              challenges of political campaigns, voter outreach, and public
              engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
