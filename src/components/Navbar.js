function Navbar() {

  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/logout";
  }

  return (
    <nav className="navbar navbar-light bg-light border-bottom">

      <div className="container-fluid">

        <span className="navbar-brand">
          LMS Learning Platform
        </span>

        <button
          className="btn btn-outline-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;