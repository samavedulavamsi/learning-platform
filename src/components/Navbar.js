
import { useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

function logout(){
localStorage.removeItem("user");
navigate("/login");
}

return(

<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">

<div className="container-fluid">

  {/* Left Section */}

  <div className="d-flex align-items-center gap-3">

    <h4 className="mb-0 fw-bold">
      LMS Learning
    </h4>

    {/* Search Bar */}
    <div className="d-none d-md-block">
      <input
        type="text"
        className="form-control"
        placeholder="Search courses..."
        style={{width:"250px"}}
      />
    </div>

  </div>

  {/* Mobile Toggle Button */}

  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarContent"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Right Section */}

  <div className="collapse navbar-collapse justify-content-end" id="navbarContent">

    <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

      {/* Notification */}
      <button className="btn position-relative">
        <i className="bi bi-bell fs-5"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </button>

      {/* User Dropdown */}
      <div className="dropdown">

        <button
          className="btn d-flex align-items-center gap-2"
          data-bs-toggle="dropdown"
        >

          <span className="fw-semibold">
            Hello, {user?.name || "Student"}
          </span>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            width="38"
            height="38"
            className="rounded-circle"
          />

        </button>

        <ul className="dropdown-menu dropdown-menu-end">

          <li>
            <button className="dropdown-item">
              <i className="bi bi-person me-2"></i>
              Profile
            </button>
          </li>

          <li>
            <button className="dropdown-item">
              <i className="bi bi-gear me-2"></i>
              Settings
            </button>
          </li>

          <li><hr className="dropdown-divider"/></li>

          <li>
            <button
              className="dropdown-item text-danger"
              onClick={logout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </li>

        </ul>

      </div>

    </div>

  </div>

</div>

</nav>

)
}

export default Navbar

