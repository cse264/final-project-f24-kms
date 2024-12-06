import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "johndoe" && password === "johndoe") {
      onLogin(username, "PremiumUser");
      navigate("/");
    } else if (username === "freeuser" && password === "freeuser") {
      onLogin(username, "FreeUser");
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #1f1f1f, #0f0f0f)",
        padding: 3,
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: 5,
          padding: 5,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          width: "350px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          Study Buddy Login 📖
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3, opacity: 0.8 }}>
          Access your account with your credentials
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          {error && (
            <Typography color="error" sx={{ marginBottom: 2, fontWeight: "bold" }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              padding: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              background: "linear-gradient(45deg, #6c63ff, #5db8fe)",
              borderRadius: "30px",
              "&:hover": {
                background: "linear-gradient(45deg, #5db8fe, #6c63ff)",
              },
            }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ marginTop: 2, opacity: 0.8, cursor: "pointer", textDecoration: "underline" }}
        >
          Don’t have an account? Sign Up
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
