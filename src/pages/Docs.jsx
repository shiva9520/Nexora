import React from 'react';

const Docs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center max-w-4xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">Documentation</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Comprehensive documentation to help you get started and make the most of Nexora.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Getting Started</h3>
            <p className="text-gray-400">
              Learn the basics of setting up your first project with Nexora.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">API Reference</h3>
            <p className="text-gray-400">
              Detailed API documentation for all endpoints and parameters.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Best Practices</h3>
            <p className="text-gray-400">
              Tips and best practices for building scalable applications.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Troubleshooting</h3>
            <p className="text-gray-400">
              Common issues and solutions to help you debug your applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
