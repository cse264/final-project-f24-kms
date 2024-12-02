import React, { useState } from "react";
import { AppBar, Toolbar, Button, Container, Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Components for different views
import Dashboard from "./components/Dashboard";
import StudyGroup from "./components/StudyGroup";
import AdminDashboard from "./components/AdminDashboard";
import Profile from "./components/Profile";
import CalendarPage from "./components/CalendarPage";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null); // Track the logged-in user

  const handleLogin = (username, role) => {
    setUser({ username, role }); // Set user state on successful login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  const renderDashboard = () => {
    if (user?.role === "Admin") {
      return <AdminDashboard />;
    } else if (user?.role === "PremiumUser") {
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
              <Button component={Link} to="/" color="inherit" style={{ fontWeight: "bold" }}>
                Home
              </Button>
              <Button
                component={Link}
                to="/study-group"
                color="inherit"
                style={{ fontWeight: "bold" }}
              >
                Study Groups
              </Button>
              <Button component={Link} to="/profile" color="inherit" style={{ fontWeight: "bold" }}>
                Profile
              </Button>
              {user.role === "Admin" && (
                <Button
                  component={Link}
                  to="/admin"
                  color="inherit"
                  style={{ fontWeight: "bold" }}
                >
                  Admin Dashboard
                </Button>
              )}
              <Button onClick={handleLogout} color="inherit" style={{ fontWeight: "bold" }}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        )}

        {/* Main Content Area */}
        <Container style={{ marginTop: user ? "100px" : "0px" }}>
          <Box my={4}>
            <Routes>
              <Route
                path="/"
                element={user ? renderDashboard() : <Navigate to="/login" />}
              />
              <Route
                path="/study-group"
                element={user ? <StudyGroup /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile"
                element={user ? <Profile /> : <Navigate to="/login" />}
              />
              <Route
                path="/admin"
                element={user?.role === "Admin" ? <AdminDashboard /> : <Navigate to="/" />}
              />
              <Route
                path="/calendar"
                element={user ? <CalendarPage /> : <Navigate to="/login" />}
              />
              <Route
                path="/chat-room"
                element={user ? <ChatRoom /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;
