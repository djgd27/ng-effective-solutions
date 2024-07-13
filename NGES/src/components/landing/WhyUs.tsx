import React from "react";
import {
  BsCheckCircle,
  BsTools,
  BsCardChecklist,
  BsCreditCard,
  BsStar,
  BsPeople,
} from "react-icons/bs";

const WhyUs: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url('https://via.placeholder.com/800x400')` }}
    >
      <h2 className="text-4xl font-bold mb-8">Why Us?</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg max-w-4xl">
        <li className="flex items-start">
          <BsTools className="text-6xl mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Experienced Professionals</h3>
            <p>
              Our team consists of highly skilled and experienced professionals
              dedicated to providing top-notch services.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <BsCardChecklist className="text-6xl mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Quality Services</h3>
            <p>
              We prioritize quality in all our services to ensure customer
              satisfaction and long-lasting results.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <BsCreditCard className="text-6xl mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Affordable Prices</h3>
            <p>
              We offer competitive pricing without compromising on the quality
              of our services.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <BsStar className="text-6xl mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Customer Satisfaction</h3>
            <p>
              Customer satisfaction is our top priority, and we strive to exceed
              expectations in every project.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <BsCheckCircle className="text-6xl mr-4 " />
          <div>
            <h3 className="text-2xl font-bold">24/7 Support</h3>
            <p>
              We provide round-the-clock support to address any issues or
              concerns you may have.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <BsPeople className="text-6xl mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Community Focused</h3>
            <p>We are committed to giving back to the community and supporting local initiatives.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WhyUs;
