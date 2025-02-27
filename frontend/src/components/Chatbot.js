import React, { useState } from "react";
import "./Chatbot.css"; // Import CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot response (modify logic as needed)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm still learning! 😊", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat with Our AI</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
