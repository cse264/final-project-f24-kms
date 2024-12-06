import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Updated imports
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudyGroup from "./components/StudyGroup";
import AdminDashboard from "./components/AdminDashboard";
import Profile from "./components/Profile";
import CalendarPage from "./components/CalendarPage";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [auth, setAuth] = useState(null); // Manage Firebase Auth instance

  useEffect(() => {
    // Fetch Firebase configuration dynamically from the backend
    fetch("/api/firebase-config")
      .then((res) => res.json())
      .then((config) => {
        const app = initializeApp(config);
        const authInstance = getAuth(app); // Initialize Firebase Auth
        setAuth(authInstance); // Save the auth instance
        setFirebaseInitialized(true);

        // Listen for auth state changes
        onAuthStateChanged(authInstance, (firebaseUser) => {
          if (firebaseUser) {
            // Update user state with user info
            setUser({ email: firebaseUser.email, role: "FreeUser" }); // Set role dynamically
          } else {
            setUser(null);
          }
        });
      })
      .catch((error) => console.error("Failed to initialize Firebase:", error));
  }, []);

  const handleLogout = async () => {
    try {
      if (auth) {
        await signOut(auth); // Use the `auth` instance from state
        setUser(null);
      } else {
        console.error("Firebase Auth is not initialized");
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  if (!firebaseInitialized) {
    return <div>Loading until Firebase is initialized..</div>; // Show a loading state until Firebase is initialized
  }

  return (
    <Router>
      <div>
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
              {user?.role === "Admin" && (
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

        <Container style={{ marginTop: user ? "100px" : "0px" }}>
          <Box my={4}>
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard userRole={user.role} /> : <Navigate to="/login" />}
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
              <Route path="/login" element={<Login onLogin={setUser} />} />
            </Routes>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;
