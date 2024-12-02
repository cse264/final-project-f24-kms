import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.tsx";
import Dashboard from "./screens/DashboardScreen.tsx";

const App = () => {
  const [role, setRole] = useState<string>("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen setRole={setRole} />} />
        <Route path="/dashboard" element={<Dashboard role={role} />} />
      </Routes>
    </Router>
  );
};

export default App;

