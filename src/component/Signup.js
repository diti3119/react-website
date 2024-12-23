import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../component/style.css";  

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    console.log("Signup Details:", { email, password });
  }; 

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{margin:"10px 0 0 0 "}}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div style={{ margin:"10px 0 0 0"}}>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <div style={{margin:"10px 0 0 0"}}>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </div>
        <button type="submit" style={{margin:"10px 0 0 0 "}}>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in here</Link>
      </p>
    </div>
  );
}

export default Signup;
