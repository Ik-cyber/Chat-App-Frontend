import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import io from 'socket.io-client';
import axios from 'axios';
import './Chat.css'; // Import CSS for background animation

const socket = io('http://localhost:5000');


// Define message type
interface Message {
  username: string;
  message: string;
}

interface IMessage extends Message {
  _id: string;
  username: string;
  content: string;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  // Create a ref to the chat container
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
    
      // Handle message submission
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim() && username.trim()) {
                  socket.emit('chatMessage', { username, content: message });
                  setMessage(''); // Clear the message input field
                }
      };

//   // Handle message submission
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (message.trim()) {
//       const newMessage: Message = { username, message };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessage(''); // Clear chat input after sending the message
//     }
//   };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-between bg-gradient-animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="bg-gray-800 py-4 text-center text-white">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6
          }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          Anonymous Chat
        </motion.h1>

        {/* Username Input */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="bg-gray-700 px-4 py-2 rounded-lg shadow-md border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            whileFocus={{ x: [0, -2, 2, 0], transition: { duration: 0.3, ease: 'easeInOut' } }}
          />
        </motion.div>
      </header>

      {/* Chat Messages Section */}
      <motion.main
        ref={chatContainerRef} // Attach ref to the chat container
        className="flex-grow p-4 overflow-y-auto bg-gray-900 text-gray-300 shadow-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`p-4 mb-4 max-w-md ${msg.username === username ? 'ml-auto bg-purple-700' : 'mr-auto bg-gray-700'} rounded-lg shadow-sm`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 12,
                delay: index * 0.1
              }}
            >
              <p className="font-bold text-purple-300">{msg.username}</p>
              <p>{msg.content}</p>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-gray-500 text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            No messages yet. Start the conversation!
          </motion.p>
        )}
      </motion.main>

      {/* Chat Input Section */}
      <footer className="bg-gray-800 py-4 shadow-lg">
        <motion.form
          className="container mx-auto flex space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <motion.input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="flex-grow px-4 py-2 rounded-lg border bg-gray-700 border-gray-600 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            whileFocus={{ x: [0, -2, 2, 0], transition: { duration: 0.3, ease: 'easeInOut' } }}
          />
          <motion.button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </footer>
    </motion.div>
  );
};

export default ChatPage;
