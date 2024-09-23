
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

interface IMessage {
  _id: string;
  username: string;
  content: string;
  timestamp: Date;
}

const Home: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [username, setUsername] = useState(''); // Add a username input

  useEffect(() => {
    // Fetch chat history when the component mounts
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/messages');
        setMessages(res.data); // Set the fetched messages to state
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    // Listen for new messages
    socket.on('chatMessage', (msg: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  // Function to send a message
  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      socket.emit('chatMessage', { username, content: message });
      setMessage(''); // Clear the message input field
    }
  };

  return (
    <div>
      <h2>Chat App</h2>

      {/* Username input */}
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        style={{ marginBottom: '10px' }}
      />

      {/* Display chat messages */}
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            <strong>{msg.username}</strong>: {msg.content} <em>({new Date(msg.timestamp).toLocaleTimeString()})</em>
          </li>
        ))}
      </ul>

      {/* Message input */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Home;
