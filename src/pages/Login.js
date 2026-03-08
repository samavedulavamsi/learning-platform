import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u)=>u.email === email && u.password === password
    );

    if(!user){
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    navigate("/");
  }

  return (

    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1588072432836-e10032774350)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div
        className="card shadow-lg p-4"
        style={{width:"380px", borderRadius:"12px"}}
      >

        <div className="text-center mb-3">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="logo"
            width="60"
            className="mb-2"
          />

          <h3 className="fw-bold">
            LMS Learning Portal
          </h3>

          <p className="text-muted">
            Continue your learning journey
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Sign In
          </button>

        </form>

        <p className="mt-3 text-center">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>

  );
}

export default Login;