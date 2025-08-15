import React from 'react';
import ManagerHeader from '../ManagerHeader/managerheader';

const ManagerAboutUs = () => {
  return (
    <div className="flex h-screen bg-green-50 font-sans">
      {/* Sidebar */}
      <ManagerHeader />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
            <p className="text-gray-600 text-lg">
              Learn more about our mission and how our Inventory Management System helps businesses grow efficiently.
            </p>
          </div>

          {/* Our Story Section */}
          <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our Inventory Management System was born from the need for a streamlined and intelligent way to track,
              manage, and organize inventory across businesses of all sizes. We noticed that many companies still relied on outdated tools or manual processes, leading to errors, delays, and unnecessary costs.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              With modern technology at our core, we’ve developed a cloud-based platform that offers real-time inventory tracking,
              detailed analytics, and seamless integration with supply chain operations.
            </p>
          </section>

          {/* Features Section */}
          <section className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">What We Offer</h2>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li><strong>Real-Time Inventory Tracking:</strong> Monitor stock levels, item movements, and alerts instantly.</li>
              <li><strong>Smart Reporting:</strong> Generate insightful reports for sales, restocking, and usage patterns.</li>
              <li><strong>User Roles & Permissions:</strong> Grant access based on user roles (Admin, Manager, Staff).</li>
              <li><strong>Automated Alerts:</strong> Get notified about low stock, order delays, and upcoming deliveries.</li>
              <li><strong>Cloud-Based Access:</strong> Access your inventory securely from anywhere, anytime.</li>
              <li><strong>Easy Integration:</strong> Works with your existing POS, e-commerce, and accounting tools.</li>
            </ul>
          </section>

          {/* Mission Statement */}
          <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We aim to empower businesses to make smarter decisions, reduce operational costs, and improve supply chain efficiency through intelligent inventory management. Whether you're a small retailer or a large warehouse, our solution scales with you.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ManagerAboutUs;
