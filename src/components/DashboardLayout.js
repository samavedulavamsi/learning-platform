import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        {/* Top Navbar (now it will load) */}
        <Navbar />

        <div className="p-4">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;