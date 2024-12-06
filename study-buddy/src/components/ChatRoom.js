import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  // Load messages from local storage on component mount
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);

    // Generate a random profile picture URL if not already set
    if (!profilePicture) {
      setProfilePicture(`https://randomuser.me/api/portraits/men/63.jpg`);
    }
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        text: currentMessage,
        timestamp: new Date().toLocaleTimeString(),
        profilePicture,
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#e9f7fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Group Chat
      </Typography>
      <Box
        style={{
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Chat Messages */}
        <List style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              style={{
                alignItems: "flex-start",
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#f4f4f4",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <ListItemAvatar>
                <Avatar src={message.profilePicture} />
              </ListItemAvatar>
              <ListItemText
                primary={message.text}
                secondary={message.timestamp}
                style={{ wordBreak: "break-word" }}
              />
            </ListItem>
          ))}
        </List>

        {/* Input Box */}
        <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 20px", fontWeight: "bold" }}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ChatRoom;

