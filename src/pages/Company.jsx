import React from 'react';

const Company = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center max-w-4xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-8">About Nexora</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Nexora is a unified platform for developers to design, deploy, and monitor high-performance applications without worrying about infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To empower developers with tools that simplify complex infrastructure challenges.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              A world where building scalable applications is as easy as writing code.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-400">
              A passionate group of engineers and innovators driving the future of development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
