import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Check credentials for PremiumUser
    if (username === "johndoe" && password === "johndoe") {
      onLogin(username, "PremiumUser"); // Pass PremiumUser role to App
      navigate("/"); // Navigate to the dashboard
    }
    // Check credentials for FreeUser
    else if (username === "freeuser" && password === "freeuser") {
      onLogin(username, "FreeUser"); // Pass FreeUser role to App
      navigate("/"); // Navigate to the dashboard
    }
    // Invalid credentials
    else {
      setError("Invalid username or password"); // Show error message
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          {error && (
            <Typography color="error" style={{ marginBottom: "15px" }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ fontWeight: "bold" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
