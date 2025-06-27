import { MdSpaceDashboard } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboardContainer overflow-y-auto fixed top-0 left-0 w-1/2 lg:w-1/4 h-full bg-[rgba(20,30,42,0.8)] backdrop-blur-lg transform transition-transform duration-300 z-50">
      <div className="p-4 w-full">
        <div className="w-full flex items-start flex-col">
          <div className="flex items-center justify-between w-full">
            <h3 className="flex items-center top-6 left-6 text-2xl text-neutral-300 font-semibold tracking-tight">
              <MdSpaceDashboard className="h-6 w-6 mr-1 text-[#93c5fd]" />
              Dashboard
            </h3>
          </div>
          <button className="outline-none text-zinc-800 text-xl sm:text-lg bg-gray-200 hover:bg-sky-50 transform transition-all duration-200 p-2 rounded-lg font-semibold mt-12 mb-4 flex text-center items-center justify-center w-full">
            Blog Management!
          </button>
          <div className="flex w-full items-center flex-col space-y-2 justify-center">
            <Link to="/admin" className="outline-none w-full">
              <button className="outline-none flex items-center space-x-2 w-full border-b text-left py-2 text-zinc-200 text-sm border-neutral-400">
                <MdAdminPanelSettings className="text-[#0a0f1f] text-xl" />
                Admin
              </button>
            </Link>
            <Link to="/admin/new-blog" className="outline-none w-full">
              <button className="outline-none flex items-center space-x-2 w-full border-b text-left py-2 text-zinc-200 text-sm border-neutral-400">
                <IoMdAddCircle className="text-[#0a0f1f] text-xl" />
                Create New Blog
              </button>
            </Link>
            <Link to="/admin/edit-blog" className="outline-none w-full">
              <button className="outline-none flex items-center space-x-2 w-full border-b text-left py-2 text-zinc-200 text-sm border-neutral-400">
                <FaEdit className="text-[#0a0f1f] text-xl" />
                Edit Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
