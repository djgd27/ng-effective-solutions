import React from "react";

const WhyUs: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url('https://via.placeholder.com/800x400')` }}
    >
      <h2 className="text-4xl font-bold mb-8">Why Us?</h2>
      <ul className="space-y-4 text-lg max-w-xl">
        <li className="flex items-center">
          <span className="material-icons text-2xl mr-2">check_circle</span>
          Experienced Professionals
        </li>
        <li className="flex items-center">
          <span className="material-icons text-2xl mr-2">check_circle</span>
          Quality Services
        </li>
        <li className="flex items-center">
          <span className="material-icons text-2xl mr-2">check_circle</span>
          Affordable Prices
        </li>
        <li className="flex items-center">
          <span className="material-icons text-2xl mr-2">check_circle</span>
          Customer Satisfaction
        </li>
        <li className="flex items-center">
          <span className="material-icons text-2xl mr-2">check_circle</span>
          24/7 Support
        </li>
      </ul>
    </div>
  );
};

export default WhyUs;
