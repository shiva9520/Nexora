import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center max-w-4xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">Features</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Discover the powerful features that make Nexora the ultimate platform for developers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Scalable APIs</h3>
            <p className="text-gray-400">
              Build and deploy APIs that scale effortlessly with your growing needs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Real-time Monitoring</h3>
            <p className="text-gray-400">
              Monitor your applications in real-time with comprehensive analytics.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-400">
              Integrate with your favorite tools and services without hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
