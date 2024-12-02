import React from "react";

const Dashboard = ({ role }: { role: string }) => {
  return (
    <div style={styles.container}>
      {role === "admin" && (
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage users and study groups.</p>
        </div>
      )}
      {role === "premium" && (
        <div>
          <h1>Premium Dashboard</h1>
          <p>Enjoy exclusive study features and private tutoring.</p>
        </div>
      )}
      {role === "free" && (
        <div>
          <h1>Free Dashboard</h1>
          <p>Browse study groups and join discussions.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" },
};

export default Dashboard;
