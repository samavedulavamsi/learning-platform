import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup(e){
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser =
      users.find((u)=>u.email === email);

    if(existingUser){
      alert("User already exists");
      return;
    }

    const newUser = {
      name,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account created successfully");

    navigate("/login");
  }

  return(
    <div className="container mt-5">

      <h2 className="mb-4">Create Account</h2>

      <form onSubmit={handleSignup}>

        <input
          className="form-control mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="btn btn-success w-100">
          Sign Up
        </button>

      </form>

    </div>
  )
}

export default Signup