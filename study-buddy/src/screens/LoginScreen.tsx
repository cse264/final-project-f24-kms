import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ setRole }: { setRole: (role: string) => void }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login with roles
    if (email === "admin@example.com" && password === "admin123") {
      setRole("admin");
    } else if (email === "premium@example.com" && password === "premium123") {
      setRole("premium");
    } else {
      setRole("free");
    }
    navigate("/dashboard"); // Navigate to a unified Dashboard
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to StudyBuddy</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" },
  title: { fontSize: "2rem", marginBottom: "1rem" },
  input: { padding: "10px", margin: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "300px" },
  button: { padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px" },
};

export default LoginScreen;
