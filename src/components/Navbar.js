function Navbar(){

  const user =
    JSON.parse(localStorage.getItem("user"));

  return(

    <nav className="navbar navbar-light bg-white shadow-sm px-4">

      <h4 className="mb-0">
        LMS Learning
      </h4>

      <div className="d-flex align-items-center">

        <span className="me-3 fw-semibold">
          Hello, {user?.name || "Student"} 👋
        </span>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          width="40"
          className="rounded-circle"
        />

      </div>

    </nav>

  )
}

export default Navbar