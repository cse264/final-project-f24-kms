// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return <div>Profile Page</div>;
};

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