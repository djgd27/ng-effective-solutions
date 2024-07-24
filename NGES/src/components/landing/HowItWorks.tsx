import React from "react";
import {
  FaRegFileAlt,
  FaImage,
  FaRegPaperPlane,
  FaClock,
} from "react-icons/fa";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaRegFileAlt className="text-2xl" />,
      title: "Fill out the estimate request form on this website.",
      description: "",
    },
    {
      icon: <FaImage className="text-2xl" />,
      title:
        "Include a picture, measurements, and description of each repair that needs to be done.",
      description: "",
    },
    {
      icon: <FaRegPaperPlane className="text-2xl" />,
      title:
        "We’ll begin to put together an estimate and reach out with any additional questions our team might have about your project or repair.",
      description: "",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "That’s it! You can expect to hear back from us within 24 hours.",
      description: "",
    },
  ];

  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-bold text-center">How It Works</h2>
        <h4 className="text-lg text-center mt-6">NG Effective Solutions</h4>
      </div>

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
        <div className="flex-1 bg-white p-4 border border-gray-300 rounded-md shadow-sm">
          <ul className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start space-x-4 text-sm">
                <div className="flex-shrink-0 text-blue-600">{step.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <a
              href="/request-estimate/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
