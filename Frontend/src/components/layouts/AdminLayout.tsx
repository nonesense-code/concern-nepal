import { Outlet } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-row">
        <aside className="w-80">
          <Dashboard />
        </aside>

        {/* Main content area */}
        <main className="flex-grow bg-[#f8fafc] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
