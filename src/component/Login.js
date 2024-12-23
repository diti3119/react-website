 import React, { useState } from "react";
import "../component/style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
  };

  return (
    <div className="login-container" style={{backgroundColor:"skyblue", height:"200px", padding:"30px", borderRadius:"20px"}}>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit} >
        <div style={{margin:"10px 0 0 0"}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div style={{margin:"10px 0 0 0"}}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        
        <button type="submit" style={{margin:"10px 0 0 0",}}>Login</button>
      </form>
    </div>
  );
}

export default Login; 