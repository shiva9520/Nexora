import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center max-w-4xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">Resources</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Explore our comprehensive resources to get the most out of Nexora.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Documentation</h3>
            <p className="text-gray-400">
              Detailed guides and API references to help you build faster.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Tutorials</h3>
            <p className="text-gray-400">
              Step-by-step tutorials for common use cases and integrations.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Community</h3>
            <p className="text-gray-400">
              Join our community of developers sharing knowledge and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
