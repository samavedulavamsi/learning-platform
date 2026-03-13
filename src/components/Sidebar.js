import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

const location = useLocation();
const [collapsed, setCollapsed] = useState(false);

const user = JSON.parse(localStorage.getItem("user"));

function logout() {
localStorage.removeItem("user");
window.location.href = "/login";
}

return (
<div
className="bg-dark text-white d-flex flex-column p-3 shadow-lg"
style={{
width: collapsed ? "80px" : "240px",
height: "100vh",
position: "sticky",
top: 0
}}
>

  {/* Logo / Title */}
  {!collapsed && (
    <div className="text-center mb-3">
      <h5 className="fw-bold mb-0">LMS</h5>
      <small className="text-secondary">Dashboard</small>
    </div>
  )}

  {/* Toggle Button */}
  <button
    className="btn btn-outline-light mb-3 d-flex justify-content-center align-items-center"
    onClick={() => setCollapsed(!collapsed)}
  >
    <i className="bi bi-list"></i>
  </button>

  {/* Divider */}
  <hr className="text-secondary mt-1 mb-3"/>

  {/* Sidebar Menu */}
  <ul className="nav nav-pills flex-column gap-2">

    <li className="nav-item">
      <Link
        to="/"
        className={`nav-link text-white d-flex align-items-center ${
          location.pathname === "/" ? "active bg-primary" : ""
        }`}
      >
        <i className={`bi bi-house-door ${collapsed ? "" : "me-2"}`}></i>
        {!collapsed && "Home"}
      </Link>
    </li>

    {user?.role === "admin" && (
      <li className="nav-item">
        <Link
          to="/admin"
          className={`nav-link text-white d-flex align-items-center ${
            location.pathname === "/admin" ? "active bg-primary" : ""
          }`}
        >
          <i className={`bi bi-speedometer2 ${collapsed ? "" : "me-2"}`}></i>
          {!collapsed && "Admin"}
        </Link>
      </li>
    )}

    <li className="nav-item">
      <Link
        to="/my-courses"
        className={`nav-link text-white d-flex align-items-center ${
          location.pathname === "/my-courses" ? "active bg-primary" : ""
        }`}
      >
        <i className={`bi bi-journal-bookmark ${collapsed ? "" : "me-2"}`}></i>
        {!collapsed && "Courses"}
      </Link>
    </li>

  </ul>

  {/* User Role */}
  {!collapsed && (
    <div className="mt-4 text-center">
      <span className="badge bg-secondary text-uppercase">
        {user?.role || "student"}
      </span>
    </div>
  )}

  {/* Logout */}
  <div className="mt-auto pt-3">
    <button
      className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
      onClick={logout}
    >
      <i className={`bi bi-box-arrow-right ${collapsed ? "" : "me-2"}`}></i>
      {!collapsed && "Logout"}
    </button>
  </div>

</div>

);
}

export default Sidebar;
