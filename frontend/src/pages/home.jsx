import React from 'react';
import Navbar from './navbar';

const Home = () => {
  const bounceColors = ['bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700'];

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/ee/84/e4/ee84e47749c1a60eaa7569df57d3f8d9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-col mt-20 items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-5xl bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-4xl animate-pulse font-bold text-teal-300 mb-4 underline hover:text-teal-400 transition-all">
            Hello, Inventory Management Portal
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Welcome to the Inventory Management Portal. Easily track, manage, and analyze your stock levels,
            orders, and suppliers. Streamline your inventory operations with real-time updates, insightful
            analytics, and intuitive controls.
          </p>
        </div>

        {/* Bouncing Boxes */}
        <div className="flex justify-center mt-4">
          <div className="relative w-72 h-48 flex items-end space-x-6">
            {bounceColors.map((color, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-lg shadow-lg ${color} animate-[bounce_1.5s_infinite]`}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
