import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter login details");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ email })
    );

    navigate("/");
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-light">

      <div className="row w-100">

        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5">

          <h1 className="mb-3">
            LMS Learning Platform
          </h1>

          <p className="text-muted mb-4">
            Welcome to the Learning Management System.
            Access modern courses in React, JavaScript,
            Python, and Machine Learning.
          </p>

          <ul className="list-group">

            <li className="list-group-item">
              ✔ Structured Courses
            </li>

            <li className="list-group-item">
              ✔ Track Learning Progress
            </li>

            <li className="list-group-item">
              ✔ Interactive Course Player
            </li>

            <li className="list-group-item">
              ✔ Resume Learning Anytime
            </li>

          </ul>

        </div>


        {/* Login Card */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">

          <div className="card shadow p-4" style={{width:"350px"}}>

            <h3 className="text-center mb-4">
              Login
            </h3>

            <form onSubmit={handleLogin}>

              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />

              </div>


              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />

              </div>


              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Login
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;