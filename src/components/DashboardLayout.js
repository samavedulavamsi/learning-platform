
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
return (
<div className="container-fluid p-0">

  <div className="d-flex flex-nowrap" style={{minHeight:"100vh"}}>

    {/* Sidebar */}

    <div className="d-none d-md-block">
      <Sidebar />
    </div>

    {/* Main Content */}

    <div className="flex-grow-1 d-flex flex-column bg-light">

      <Navbar />

      <div
        className="p-3 p-md-4 flex-grow-1"
        style={{overflowY:"auto"}}
      >

        <div className="container-fluid">

          {children}

        </div>

      </div>

    </div>

  </div>

</div>
);
}

export default DashboardLayout;
