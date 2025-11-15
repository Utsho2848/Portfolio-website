import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        setSuccess("Login successful!");
        onLogin();
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <input
        className="login-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" className="login-btn">Login</button>

      {error && <p className="login-message login-error">{error}</p>}
      {success && <p className="login-message login-success">{success}</p>}
    </form>
  );
}

export default Login;