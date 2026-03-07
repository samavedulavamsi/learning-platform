import { Link } from "react-router-dom";

function Sidebar() {

  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "220px" }}>

      <h4 className="mb-4">LMS Dashboard</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/my-courses">
            My Courses
          </Link>
        </li>

        <li className="nav-item mb-2">
          <button
            className="btn btn-danger w-100"
            onClick={logout}
          >
            Logout
          </button>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;