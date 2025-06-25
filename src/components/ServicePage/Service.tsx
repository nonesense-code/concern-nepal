import ourServices from "./ServiceList.ts"
const Service = () => {
  return (
    <div className="">
      <div className="">This is Service page</div>
      <div>Why do you need Concern Nepal for your research?</div>
      {/* services down here */}
      <div>
        {ourServices.map((item,index)=>(
          <div className="bg-[#F3F7FA] h-32 w-40">
            {item.description}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
