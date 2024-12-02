import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components for different views
import Dashboard from "./components/Dashboard";
import StudyGroup from "./components/StudyGroup";
import AdminDashboard from "./components/AdminDashboard";
import Profile from "./components/Profile";
import CalendarPage from "./components/CalendarPage"; // Import CalendarPage
import ChatRoom from "./components/ChatRoom"; // Import ChatRoom component

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === "admin" && password === "admin123") {
      onLogin({ username: "admin", role: "Admin" });
    } else if (username === "premium" && password === "premium123") {
      onLogin({ username: "premium_user", role: "PremiumUser" });
    } else {
      onLogin({ username: "guest", role: "FreeUser" });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "100px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

const App = () => {
  const [user, setUser] = useState(null); // Initially, no user is logged in

  const renderDashboard = () => {
    if (user.role === "Admin") {
      return <AdminDashboard />;
    } else if (user.role === "PremiumUser") {
      return <Dashboard userRole="PremiumUser" />;
    } else {
      return <Dashboard userRole="FreeUser" />;
    }
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        {user && (
          <AppBar position="fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <Toolbar>
              <Button color="inherit" href="/" style={{ fontWeight: "bold" }}>
                Home
              </Button>
              <Button color="inherit" href="/study-group" style={{ fontWeight: "bold" }}>
                Study Groups
              </Button>
              <Button color="inherit" href="/profile" style={{ fontWeight: "bold" }}>
                Profile
              </Button>
              {user.role === "Admin" && (
                <Button color="inherit" href="/admin" style={{ fontWeight: "bold" }}>
                  Admin Dashboard
                </Button>
              )}
              <Button
                color="inherit"
                onClick={() => setUser(null)} // Reset user to null on logout
                style={{ fontWeight: "bold" }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        )}

        {/* Main Content Area */}
        <Container style={{ marginTop: "100px" }}>
          <Box my={4}>
            <Routes>
              {!user ? (
                <Route path="*" element={<Login onLogin={setUser} />} />
              ) : (
                <>
                  <Route path="/" element={renderDashboard()} />
                  <Route path="/study-group" element={<StudyGroup />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/chat-room" element={<ChatRoom />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </Routes>
          </Box>
        </Container>
      </div>
    </Router>
  );
};

export default App;
