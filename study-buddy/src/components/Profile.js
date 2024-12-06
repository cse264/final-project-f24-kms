import React from "react";
import { Typography, Paper, Box, Button, Avatar } from "@mui/material";
import "./Profile.css"; // Import the Profile page styles

function Profile() {
  return (
    <div className="profile-container">
      {/* Background Video */}
      <video autoPlay muted loop className="video-background">
        <source src="/videos/studybuddy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <Paper
        elevation={3}
        className="profile-content"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
          color: "white", // Ensure text remains visible
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          {/* Profile Avatar */}
          <Avatar
            alt="John Doe"
            src="https://randomuser.me/api/portraits/men/63.jpg" // Random male profile picture
            sx={{ width: 100, height: 100 }}
          />

          <Typography variant="h5" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body1" style={{ color: "white" }}>
  Premium User
</Typography>

        </Box>

        {/* Profile Information */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Account Details
          </Typography>
          <Typography variant="body2">Email: johndoe@example.com</Typography>
          <Typography variant="body2">Membership: Premium User</Typography>
          <Typography variant="body2">Joined: January 2024</Typography>
        </Box>

        {/* Edit Profile Button */}
        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Profile;



/*
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Profile = ({ user, setUser }) => {
  const [username, setUsername] = useState(user.username);
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    setUser({ username, role }); // Save the updated user data
    console.log('Profile updated:', { username, role });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>

      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
*/