// import React from 'react'
// import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <div>
//       Home
//     <Link to={"chat"}>Chat</Link>
//     </div>
//   )
// }

// export default Home

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto flex justify-center items-center px-4">
//           <h1 className="text-xl font-bold">AnonChat</h1>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow">
//         <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold md:text-5xl mb-6">
//               Chat Anonymously, Safely & Securely
//             </h2>
//             <p className="text-lg mb-10 max-w-lg mx-auto">
//               Start chatting with strangers or friends without revealing your identity.
//               Your conversations are secure and private.
//             </p>
//             <a
//               href="#start-chat"
//               className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
//             >
//               Start Chatting
//             </a>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-16">
//           <div className="container mx-auto px-4">
//             <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="bg-gray-200 p-6 rounded-lg">
//                   <h4 className="text-xl font-semibold mb-2">100% Anonymous</h4>
//                   <p>No registration required. Just start chatting immediately.</p>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="bg-gray-200 p-6 rounded-lg">
//                   <h4 className="text-xl font-semibold mb-2">End-to-End Encryption</h4>
//                   <p>Your chats are secure and encrypted, ensuring privacy.</p>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="bg-gray-200 p-6 rounded-lg">
//                   <h4 className="text-xl font-semibold mb-2">Real-Time Messaging</h4>
//                   <p>Fast, real-time messaging to connect with others instantly.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="bg-gray-100 py-16">
//           <div className="container mx-auto px-4">
//             <h3 className="text-3xl font-bold text-center mb-10">How It Works</h3>
//             <div className="container mx-auto flex justify-center items-center">
//               <div className="flex flex-col justify-center">
//                 <p className="text-lg">
//                   Our platform allows you to connect with anyone across the globe while maintaining your anonymity.
//                   Simply click "Start Chatting", get paired with a random person, and start your secure conversation.
//                 </p>
//                 <a
//                   href="#start-chat"
//                   className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-500 transition duration-300 w-max"
//                 >
//                   Start Chatting Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 AnonChat. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center items-center px-4">
          <motion.h1 
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            AnonChat
          </motion.h1>
          
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold md:text-5xl mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Chat Anonymously, Safely & Securely
            </motion.h2>
            <motion.p
              className="text-lg mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Start chatting with strangers or friends without revealing your identity.
              Your conversations are secure and private.
            </motion.p>
            <motion.a
              href="#start-chat"
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
             <Link to={"chat"}>Start Chatting</Link> 
            </motion.a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '100% Anonymous', description: 'No registration required. Just start chatting immediately.' },
                { title: 'End-to-End Encryption', description: 'Your chats are secure and encrypted, ensuring privacy.' },
                { title: 'Real-Time Messaging', description: 'Fast, real-time messaging to connect with others instantly.' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <motion.h3
              className="text-3xl font-bold text-center mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How It Works
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src="https://via.placeholder.com/400x300" alt="How it works" className="rounded-lg" />
              </motion.div>
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg">
                  Our platform allows you to connect with anyone across the globe while maintaining your anonymity.
                  Simply click "Start Chatting", get paired with a random person, and start your secure conversation.
                </p>
                <motion.a
                  href="#start-chat"
                  className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-500 transition duration-300 w-max"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                              <Link to={"chat"}>Start Chatting</Link> 
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>&copy; 2024 AnonChat. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default HomePage;
