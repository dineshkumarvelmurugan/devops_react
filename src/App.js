import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "user@example.com" && password === "password123") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid Credentials. Try again.");
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake animation
    }
  };

  return (
    <div className="container">
      <h1>🔐 Welcome Back</h1>
      <div className={`login-box ${shake ? "shake" : ""}`}>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
