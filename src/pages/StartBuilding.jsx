import React from 'react';
import "boxicons/css/boxicons.min.css";

const StartBuilding = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center mb-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center max-w-4xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">Start Building</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Get started with Nexora and build your next big idea.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Create Account</h3>
            <p className="text-gray-400">
              Sign up for a free account and start building immediately.
            </p>
            <button className="mt-4 bg-cyan-300 text-black py-2 px-4 rounded-full font-semibold hover:bg-cyan-200 transition-all duration-300">
              Sign Up <i className="bx bx-user-plus"></i>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Explore Templates</h3>
            <p className="text-gray-400">
              Use pre-built templates to accelerate your development.
            </p>
            <button className="mt-4 bg-cyan-300 text-black py-2 px-4 rounded-full font-semibold hover:bg-cyan-200 transition-all duration-300">
              View Templates <i className="bx bx-template"></i>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">API Documentation</h3>
            <p className="text-gray-400">
              Learn how to integrate Nexora APIs into your applications.
            </p>
            <button className="mt-4 bg-cyan-300 text-black py-2 px-4 rounded-full font-semibold hover:bg-cyan-200 transition-all duration-300">
              Read Docs <i className="bx bx-book-open"></i>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-400">
              Join our community for help and collaboration.
            </p>
            <button className="mt-4 bg-cyan-300 text-black py-2 px-4 rounded-full font-semibold hover:bg-cyan-200 transition-all duration-300">
              Join Community <i className="bx bx-group"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBuilding;
